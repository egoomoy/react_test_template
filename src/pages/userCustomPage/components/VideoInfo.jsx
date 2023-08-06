import React from "react";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: "column";
  border: 0.1rem dotted #bebebe;
  border-radius: 5px;
  padding: 1rem;
`;
const SetArea = styled.div`
  z-index: 3;
  width: 100%;
  background-color: rgba(154, 181, 255, 0.3);
  position: absolute;
  display: flex;
  padding: 0.5rem 1rem;
  div {
    position: relative;
    flex: none;
  }
  svg {
    margin-left: auto;
    color: #ffffff;
    cursor: pointer;
  }
`;

export default function VideoInfo({ item, onRemoveItem }) {
  return (
    <>
      <SetArea>
        <div style={{ color: "white" }}>VideoInfo</div>
        <CloseIcon fontSize="medium" onClick={() => onRemoveItem(item)} />
      </SetArea>
      <Container>
        <Typography noWrap className="video_name" variant="h6">
          VideoInfo를 작성하는 구역
        </Typography>
      </Container>
    </>
  );
}
