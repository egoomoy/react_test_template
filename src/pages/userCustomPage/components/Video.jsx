import React from "react";
import useClasses from "../../../hooks/useClasses";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player";
import Control from "./Control";
import styled from "styled-components";
import { colors } from "@mui/material";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: "flex";
  background: #0f0f0f;
  flex-direction: "column";
`;

const SetArea = styled.div`
  z-index: 3;
  width: 100%;
  background-color: rgba(14, 42, 127, 0.664);
  position: absolute;
  display: flex;

  div {
    position: relative;
    padding: 0.5rem 1rem;
    flex: none;
  }
  svg {
    margin-left: auto;
    padding: 0.5rem 1rem;
    margin-left: auto;
    color: #fff;
  }
`;

export default function Video({ item, onRemoveItem }) {
  return (
    <Container>
      <SetArea>
        <div style={{ color: "white" }}>Video</div>
        <CloseIcon fontSize="medium" onClick={() => onRemoveItem(item)} />
      </SetArea>
      <ReactPlayer
        className="player"
        url="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
        width="100%"
        height="100%"
        playing={true}
        muted={true}
      ></ReactPlayer>
      <Control />
    </Container>
  );
}
