import React from "react";
import Card from "@mui/material/Card";
import CloseIcon from "@mui/icons-material/Close";
import ReactPlayer from "react-player";
import Control from "./Control";
import styled from "styled-components";

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
      <Container>
        <ReactPlayer
          className="player"
          url="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
          width="100%"
          height="100%"
          playing={true}
          muted={true}
        ></ReactPlayer>
        {/* <Control /> */}
      </Container>
    </>
  );
}
