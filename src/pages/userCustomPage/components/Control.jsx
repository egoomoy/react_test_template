/* eslint-disable react/prop-types */
import {
  FastForward,
  FastRewind,
  Pause,
  PlayArrow,
  SkipNext,
  VolumeUp,
} from "@mui/icons-material";
import "./Control.css";
import Box from "@mui/material/Box";
import { Slider, Button, Popover, Grid, Tooltip } from "@mui/material";
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
`;

const ContolArea = styled.div`
  background-color: rgba(81, 81, 81, 0.1);
  height: 7%;
  display: flex;
  padding: 0 0.5rem;
  svg {
    margin: auto 0;
    color: #ffffff;
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
  played,
  onSeek,
  onSeekMouseUp,
  duration,
  currentTime,
}) => {
  return (
    <>
      <Container>
        <VideoArea onClick={onPlayPause}></VideoArea>
        <DummyArea></DummyArea>
        <Slider
          size="medium"
          min={0}
          max={100}
          value={played * 100}
          onChangeCommitted={onSeekMouseUp}
          onChange={onSeek}
        />
        <ContolArea>
          {playing ? (
            <Pause onClick={onPlayPause} />
          ) : (
            <PlayArrow onClick={onPlayPause} />
          )}
          <div>
            {currentTime} / {duration}
          </div>
        </ContolArea>
      </Container>
    </>
  );
};

export default Control;
