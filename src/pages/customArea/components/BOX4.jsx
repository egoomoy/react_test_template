import React, { useEffect, useState } from "react";
import SqureTextBox from "../../../components/common/SqureTextBox";
import palette from "../../../assets/palette";

const BOX4 = ({ item, currentLayout }) => {
  const maxRow = 0;
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (currentLayout) {
      setMaxHeight(maxRow * currentLayout.h);
    } else {
      setMaxHeight(maxRow * item.h);
    }
  }, [currentLayout, item]);

  return (
    <>
      <div style={{ height: "100%", position: "relative", overflowX: "auto" }}>
        <SqureTextBox
          className={"drag-header"}
          text="BOX4"
          background={palette.green[3]}
        />
      </div>
    </>
  );
};

export default BOX4;
