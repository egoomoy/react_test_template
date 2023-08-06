import React from "react";
import useClasses from "../../../hooks/useClasses";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: "flex";
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

export default function VideoTitle({ item, onRemoveItem }) {
  return (
    <Container>
      <SetArea>
        <div style={{ color: "white" }}>VideoTitle</div>
        <CloseIcon fontSize="medium" onClick={() => onRemoveItem(item)} />
      </SetArea>
    </Container>
  );
}
