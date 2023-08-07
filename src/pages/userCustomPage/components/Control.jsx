/* eslint-disable react/prop-types */
import {
  FastForward,
  FastRewind,
  Pause,
  PlayArrow,
  SkipNext,
  VolumeUp,
  Refresh,
} from "@mui/icons-material";
import { Slider } from "@mui/material";
import styled from "styled-components";

//https://code.pieces.app/blog/react-player-customized-controls
//참고 중

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 4;
  span {
    padding: 0;
    margin: 0;
    font-size: 10px;
    color: #ffffff;
  }
  .MuiSlider-thumb {
    width: 10px;
    height: 10px;
    color: #ffffff;
  }
`;
const VideoArea = styled.div`
  height: 80%;
`;

const DummyArea = styled.div`
  height: 13%;
  color: yellow;
  font-size: 2rem;
`;

const ContolArea = styled.div`
  background-color: rgba(81, 81, 81, 0.1);
  height: 7%;
  display: flex;
  padding: 0 0.5rem;
  svg {
    margin: auto 0;
    color: #ffffff;
    cursor: pointer;
  }
  div {
    padding: 0 1rem;
    margin: auto 0;
    color: #ffffff;
    font-size: 0.8rem;
  }
`;
const Control = ({
  onPlayPause,
  playing,
  onRewind,
  onForward,
  played,
  onSeek,
  onSeekMouseUp,
  onVolumeChangeHandler,
  onVolumeSeekUp,
  volume,
  mute,
  onMute,
  duration,
  currentTime,
  onMouseSeekDown,
  controlRef,
  onRefresh,
}) => {
  return (
    <div ref={controlRef}>
      <Container>
        <VideoArea onClick={onPlayPause}></VideoArea>
        <DummyArea>
          {played}
          플레이어도 만드는게 맞는지 모르겠는데 만들고..있고,,,, 아 이렇게하면
          자막도 사용할라면 할 수 있을듯..
        </DummyArea>
        <div>
          <Slider
            size="medium"
            min={0}
            max={100}
            value={played * 100}
            onChange={onSeek}
            onChangeCommitted={onSeekMouseUp}
            onMouseDown={onMouseSeekDown}
          />
        </div>
        <ContolArea>
          {playing ? (
            played >= 1 ? (
              <Refresh onClick={onRefresh} />
            ) : (
              <Pause onClick={onPlayPause} />
            )
          ) : (
            <PlayArrow onClick={onPlayPause} />
          )}
          <div>
            {currentTime} / {duration}
          </div>
        </ContolArea>
      </Container>
    </div>
  );
};

export default Control;
