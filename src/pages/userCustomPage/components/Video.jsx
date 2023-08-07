/* eslint-disable react/prop-types */
import CloseIcon from "@mui/icons-material/Close";
import ReactPlayer from "react-player";
import Control from "./Control";
import styled from "styled-components";
import { useState, useRef } from "react";
import { formatTime } from "../../../utils/VideoTimeFormat";
let count = 0;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background: #1b1b1b;
  border: 0.1rem dotted #bebebe;
  flex-direction: "column";
  border-radius: 3px;
`;

// const Container = styled.div`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: "column";
//   border: 0.1rem dotted #bebebe;
//   border-radius: 5px;
//   padding: 1rem;
// `;

const SetArea = styled.div`
  z-index: 3;
  width: 100%;
  background-color: rgba(154, 181, 255, 0.7);
  position: absolute;
  display: flex;
  padding: 0.5rem 1rem;
  div {
    position: relative;
    flex: none;
  }
  .closeBtn {
    margin-left: auto;
    color: #ffffff;
    cursor: pointer;
  }
`;
export default function Video({ item, onRemoveItem }) {
  const videoPlayerRef = useRef(null);
  const controlRef = useRef(null);

  const [videoState, setVideoState] = useState({
    playing: true,
    muted: false,
    volume: 0.5,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
    buffer: true,
  });

  //Destructuring the properties from the videoState
  const { playing, muted, volume, playbackRate, played, seeking, buffer } =
    videoState;

  const currentTime = videoPlayerRef.current
    ? videoPlayerRef.current.getCurrentTime()
    : "00:00";
  const duration = videoPlayerRef.current
    ? videoPlayerRef.current.getDuration()
    : "00:00";

  const formatCurrentTime = formatTime(currentTime);
  const formatDuration = formatTime(duration);

  const playPauseHandler = () => {
    //plays and pause the video (toggling)
    setVideoState({ ...videoState, playing: !videoState.playing });
  };

  const refreshHandler = () => {
    videoPlayerRef.current.seekTo(0);
  };

  const rewindHandler = () => {
    //Rewinds the video player reducing 5
    videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() - 5);
  };

  const handleFastFoward = () => {
    //FastFowards the video player by adding 10
    videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + 10);
  };

  //console.log("========", (controlRef.current.style.visibility = "false"));
  const progressHandler = (state) => {
    if (count > 3) {
      console.log("close");
      controlRef.current.style.visibility = "hidden"; // toggling player control container
    } else if (controlRef.current.style.visibility === "visible") {
      count += 1;
    }

    if (!seeking) {
      setVideoState({ ...videoState, ...state });
    }
  };

  const seekHandler = (e, value) => {
    setVideoState({ ...videoState, played: parseFloat(value / 100) });
    videoPlayerRef.current.seekTo(parseFloat(value / 100));
  };

  const seekMouseUpHandler = (e, value) => {
    console.log(value);

    setVideoState({ ...videoState, seeking: false });
    videoPlayerRef.current.seekTo(value / 100);
  };

  const volumeChangeHandler = (e, value) => {
    const newVolume = parseFloat(value) / 100;

    setVideoState({
      ...videoState,
      volume: newVolume,
      muted: Number(newVolume) === 0 ? true : false, // volume === 0 then muted
    });
  };

  const volumeSeekUpHandler = (e, value) => {
    const newVolume = parseFloat(value) / 100;

    setVideoState({
      ...videoState,
      volume: newVolume,
      muted: newVolume === 0 ? true : false,
    });
  };

  const muteHandler = () => {
    //Mutes the video player
    setVideoState({ ...videoState, muted: !videoState.muted });
  };

  const onSeekMouseDownHandler = (e) => {
    setVideoState({ ...videoState, seeking: true });
  };

  const mouseMoveHandler = () => {
    controlRef.current.style.visibility = "visible";
    count = 0;
  };

  const bufferStartHandler = () => {
    console.log("Bufering.......");
    setVideoState({ ...videoState, buffer: true });
  };

  const bufferEndHandler = () => {
    console.log("buffering stoped ,,,,,,play");
    setVideoState({ ...videoState, buffer: false });
  };
  return (
    <>
      <SetArea>
        <div style={{ color: "white" }}>Video</div>
        <CloseIcon
          className="closeBtn"
          fontSize="medium"
          onClick={() => onRemoveItem(item)}
        />
      </SetArea>
      <Control
        controlRef={controlRef}
        onPlayPause={playPauseHandler}
        playing={playing}
        onRewind={rewindHandler}
        onForward={handleFastFoward}
        played={played}
        onSeek={seekHandler}
        onSeekMouseUp={seekMouseUpHandler}
        volume={volume}
        onVolumeChangeHandler={volumeChangeHandler}
        onVolumeSeekUp={volumeSeekUpHandler}
        mute={muted}
        onMute={muteHandler}
        playRate={playbackRate}
        duration={formatDuration}
        currentTime={formatCurrentTime}
        onMouseSeekDown={onSeekMouseDownHandler}
        onRefresh={refreshHandler}
      />
      <Container>
        <ReactPlayer
          ref={videoPlayerRef}
          className="player"
          url="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
          width="100%"
          height="100%"
          playing={playing}
          muted={true}
          onProgress={progressHandler}
          onBuffer={bufferStartHandler}
          onBufferEnd={bufferEndHandler}
        ></ReactPlayer>
      </Container>
    </>
  );
}
