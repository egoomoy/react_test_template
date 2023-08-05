import React from "react";
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
import useClasses from "../../../hooks/useClasses";

//https://code.pieces.app/blog/react-player-customized-controls
//참고 중

const styles = (theme) => ({
  volumeSlider: {
    width: "5px",
    color: "#9556CC",
  },

  bottomIcons: {
    color: "#999",
    padding: "12px 8px",

    "&:hover": {
      color: "#fff",
    },
  },
});

const Control = () => {
  const classes = useClasses(styles);
  return (
    <div className="control_Container">
      <div className="top_container"></div>

      <div className="mid__container">
        <div className="icon__btn">
          <FastRewind fontSize="large" />
        </div>

        <div className="icon__btn">
          <Pause fontSize="large" />
        </div>

        <div className="icon__btn">
          <FastForward fontSize="large" />
        </div>
      </div>

      <div className="bottom__container">
        <div className="slider__container"></div>
        <div className="control__box">
          <div className="inner__controls">
            <div className="icon__btn">
              <PlayArrow fontSize="large" />
            </div>
            <div className="icon__btn">
              <SkipNext fontSize="large" />
            </div>
            <div className="icon__btn">
              <VolumeUp className="svg_icons" />
            </div>

            <Box sx={{ width: 100 }}>
              <Slider size="large" valueLabelDisplay="on" />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
