import React, { useEffect, useState } from "react";
import BOX4 from "./components/BOX4";
import BOX3 from "./components/BOX3";
import BOX1 from "./components/BOX1";
import BOX2 from "./components/BOX2";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const dataLayout = {
  lg: [
    {
      x: 0,
      y: 1,
      w: 12,
      h: 5,
      i: "BOX1",
      static: true,
      minH: 1,
      minW: 1,
      maxW: 12,
      maxH: 12,
    },
    {
      x: 0,
      y: 1,
      w: 4,
      h: 5,
      i: "BOX2",
      static: false,
      minH: 1,
      minW: 1,
      maxW: 12,
      maxH: 12,
    },
    {
      x: 4,
      y: 1,
      w: 4,
      h: 5,
      i: "BOX3",
      static: false,
      minH: 1,
      minW: 1,
      maxW: 12,
      maxH: 12,
    },
    {
      x: 8,
      y: 1,
      w: 4,
      h: 5,
      i: "BOX4",
      static: false,
      minH: 1,
      minW: 1,
      maxW: 12,
      maxH: 12,
    },
  ],
};

const CustomPage = () => {
  const [currentLayout, setCurrentLayout] = useState([]);
  const [layouts, setLayouts] = useState(dataLayout);
  const [mounted, setMounted] = useState(true);
  const [currentBreakpoint, setCurrentBreakpoint] = useState("lg");
  const [compactType, setCompactType] = useState("vertical");

  const cols = {
    lg: 12,
    md: 12,
    sm: 12,
    xs: 12,
    xxs: 12,
  };
  const onCompactTypeChange = () => {
    const newCompactType = compactType === "vertical" ? null : "vertical";
    setCompactType(newCompactType);
  };

  const onBreakpointChange = (breakpoint) => {
    setCurrentBreakpoint(breakpoint);
  };

  const onLayoutChange = (layout, layouts) => {
    setCurrentLayout(layout);
  };

  const SwitchContent = ({ item, currentLayout }) => {
    switch (item.i) {
      case "BOX1":
        return (
          <BOX1
            item={item}
            currentLayout={currentLayout.filter((x) => x.i === "BOX1")[0]}
          />
        );
      case "BOX2":
        return (
          <BOX2
            item={item}
            currentLayout={currentLayout.filter((x) => x.i === "BOX2")[0]}
          />
        );
      case "BOX3":
        return (
          <BOX3
            item={item}
            currentLayout={currentLayout.filter((x) => x.i === "BOX3")[0]}
          />
        );
      case "BOX4":
        return (
          <BOX4
            item={item}
            currentLayout={currentLayout.filter((x) => x.i === "BOX4")[0]}
          />
        );
      default:
        return "None";
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const StringifyLayout = ({ layout }) => {
    return layout.map((l) => {
      return (
        <div className="layoutItem" key={l.i}>
          <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
        </div>
      );
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div>
          {mounted ? (
            <ResponsiveReactGridLayout
              className={"grid-layout"}
              draggableHandle={".drag-header"}
              rowHeight={50}
              containerPadding={[0, 0]}
              margin={[20, 20]}
              cols={cols}
              layouts={layouts}
              onBreakpointChange={onBreakpointChange}
              onLayoutChange={onLayoutChange}
              // WidthProvider option
              measureBeforeMount={false}
              // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
              // and set `measureBeforeMount={true}`.
              useCSSTransforms={mounted}
              compactType={compactType}
              preventCollision={!compactType}
            >
              {layouts.lg.map((item) => {
                return (
                  <div key={item.i} className={item.static ? "static" : ""}>
                    <SwitchContent item={item} currentLayout={currentLayout} />
                  </div>
                );
              })}
            </ResponsiveReactGridLayout>
          ) : null}
        </div>
        <div className="layoutJSON">
          Compaction type: {compactType || "No Compaction"}
          <br />
          Current Breakpoint: {currentBreakpoint} ({cols[currentBreakpoint]}{" "}
          columns)
          <br />
          Displayed as <code>[x, y, w, h]</code>:
          <div className="columns">
            <StringifyLayout layout={currentLayout} />
          </div>
        </div>
        <button onClick={onCompactTypeChange}>Change Compaction Type</button>
      </div>
    </>
  );
};

export default CustomPage;
