import React from "react";
import useClasses from "../../../hooks/useClasses";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Scale } from "@mui/icons-material";

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

  .like_wrapper {
    margin-left: auto;
  }
  button {
    border: 0;
    color: #637381;
    margin: 3px;
    padding: 5px 7px;
    font-weight: 900;
    &:hover {
      border: 0;
      background-color: rgba(14, 42, 127, 0.1);
    }
  }
  .video_name {
    margin-right: auto;
    color: #383838;
    text-overflow: ellipsis;
    overflow: "hidden";
    flex: none;
  }
`;

const SetArea = styled.div`
  z-index: 3;
  width: 100%;
  background-color: rgba(14, 42, 127, 0.1);
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
    <>
      <SetArea>
        <div style={{ color: "white" }}>VideoTitle</div>
        <CloseIcon fontSize="medium" onClick={() => onRemoveItem(item)} />
      </SetArea>
      <Container>
        <Typography noWrap className="video_name" variant="h6">
          Alice’s Adventures in Wonderland
        </Typography>
        <div className="like_wrapper">
          <Button
            variant="outlined"
            type="submit"
            sx={{ borderRadius: 28, color: "#000" }}
            size="medium"
            startIcon={<AddIcon />}
            color="secondary"
          >
            <Typography variant="body2">Scraping</Typography>
          </Button>
          <Button
            variant="outlined"
            type="submit"
            sx={{ borderRadius: 28, color: "#000" }}
            size="medium"
            startIcon={<FavoriteIcon style={{ fontSize: "15px" }} />}
            color="secondary"
          >
            <Typography variant="body2">Favirute</Typography>
          </Button>
          <Button
            variant="outlined"
            type="submit"
            sx={{ borderRadius: 28, color: "#000" }}
            size="medium"
            startIcon={<ShareIcon style={{ fontSize: "15px" }} />}
            color="secondary"
          >
            <Typography variant="body2">Share</Typography>
          </Button>
        </div>
      </Container>
    </>
  );
}
