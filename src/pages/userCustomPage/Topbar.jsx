import React from "react";
import Card from "@mui/material/Card";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";
import useClasses from "../../hooks/useClasses";

const styles = (theme) => ({
  root: {
    padding: 1,
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
});

const TopBar = ({
  onLayoutSave,
  items,
  onRemoveItem,
  onAddItem,
  originalItems,
}) => {
  const classes = useClasses(styles);
  return (
    <Card className={classes.root}>
      <IconButton aria-label="save" onClick={onLayoutSave}>
        <SaveIcon />
      </IconButton>
    </Card>
  );
};

export default TopBar;
