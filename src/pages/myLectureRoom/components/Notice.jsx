import React from "react";
import useClasses from "../../../hooks/useClasses";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const styles = () => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem",
  },
  spacer: {
    flexGrow: 1,
  },
  body: {
    padding: "0.5rem",
    flexGrow: 1,
  },
});

export default function Notice({ item, onRemoveItem }) {
  const classes = useClasses(styles);

  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h6" gutterBottom>
          Notice
        </Typography>
        <div className={classes.spacer} />
        <IconButton aria-label="delete" onClick={() => onRemoveItem(item)}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>
      <div className={classes.body} />
    </Card>
  );
}
