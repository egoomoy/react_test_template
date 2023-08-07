/* eslint-disable react/prop-types */
import CloseIcon from "@mui/icons-material/Close";
import ReactPlayer from "react-player";
import Control from "./Control";
import styled from "styled-components";
import { useState, useRef } from "react";
import { formatTime } from "../../../utils/VideoTimeFormat";

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

  const [videoState, setVideoState] = useState({
    playing: true,
    muted: false,
    volume: 0.5,
    played: 0,
    seeking: false,
    Buffer: true,
  });

  //Destructuring the properties from the videoState
  const { playing, muted, volume, playbackRate, played, seeking, buffer } =
    videoState;

  const playPauseHandler = () => {
    console.log(videoState);
    //plays and pause the video (toggling)
    setVideoState({ ...videoState, playing: !videoState.playing });
    console.log(playing);
  };

  const seekHandler = (e, value) => {
    setVideoState({ ...videoState, played: parseFloat(value) / 100 });
  };

  const seekMouseUpHandler = (e, value) => {
    setVideoState({ ...videoState, seeking: false });
    videoPlayerRef.current.seekTo(value / 100);
  };

  const progressHandler = (state) => {
    if (!seeking) {
      setVideoState({ ...videoState, ...state });
    }
  };

  const currentTime = videoPlayerRef.current
    ? videoPlayerRef.current.getCurrentTime()
    : "00:00";
  const duration = videoPlayerRef.current
    ? videoPlayerRef.current.getDuration()
    : "00:00";

  const formatCurrentTime = formatTime(currentTime);

  const formatDuration = formatTime(duration);

  const controlRef = useRef(null);

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
        onSeek={seekHandler}
        onSeekMouseUp={seekMouseUpHandler}
        onProgress={progressHandler}
        played={played}
        duration={formatDuration}
        currentTime={formatCurrentTime}
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
        ></ReactPlayer>
      </Container>
    </>
  );
}
