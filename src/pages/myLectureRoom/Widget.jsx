import React from "react";
import useClasses from "../../hooks/useClasses";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

import SqureTextBox from "../../components/common/SqureTextBox";
import palette from "../../assets/palette";
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

const widgetNames = {
  a: "A",
  b: "B",
  c: "C",
  d: "D",
};
export default function Widget({ id, onRemoveItem }) {
  const classes = useClasses(styles);

  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h6" gutterBottom>
          {widgetNames[id]}
        </Typography>
        <div className={classes.spacer} />
        <IconButton aria-label="delete" onClick={() => onRemoveItem(id)}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>
      <div className={classes.body} />
    </Card>
  );
}

// return (
//   <>
//     <SqureTextBox
//       className={"drag-header"}
//       text="BOX3"
//       background={palette.grape[3]}
//     />
//   </>
// );
// }
