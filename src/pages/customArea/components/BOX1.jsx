import React, { useEffect, useState } from "react";
import SqureTextBox from "../../../components/common/SqureTextBox";
import palette from "../../../assets/palette";

const BOX1 = ({ item, currentLayout }) => {
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
          text={
            currentLayout
              ? " currentLayout.h: " +
                currentLayout.h +
                ",currentLayout.w" +
                currentLayout.w
              : "null"
          }
          background={palette.red[3]}
        ></SqureTextBox>
      </div>
    </>
  );
};

export default BOX1;
