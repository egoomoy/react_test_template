import React, { useState } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { withSize } from "react-sizeme";
import Topbar from "./Topbar";
import { useMainPageStore } from "../../store/useMainPageStore";
import ComponentsSwitch from "./ComponentsSwitch";

/**
 * originalItems , initialLayouts 을 DB로 변경 필요
 * originalItem은 w/h를 갖는 테이블로 item-Id|w값|h값
 * 다중포탈이라면 사용가능한 originalItem에 대한 테이블도 별도로 필요
 * originalItem -  m2m매핑테이블 - 회사
 *
 * itnialLayout
 * |포탈id|메뉴id혹은화면번호|아이템id|x좌표위치|y좌표위치|static여부|wh는 조인으로
 *
 */

const originalItems = [
  "alert",
  "video",
  "notice",
  "playlist",
  "review",
  "videoinfo",
];

const initialLayouts = {
  lg: [
    { i: "alert", x: 0, y: 0, w: 1, h: 1, static: false },
    { i: "video", x: 0, y: 1, w: 2, h: 4, static: false },
    { i: "notice", x: 2, y: 1, w: 4, h: 4, static: false },
    { i: "playlist", x: 6, y: 1, w: 3, h: 4, static: false },
    { i: "review", x: 9, y: 1, w: 3, h: 4, static: false },
    { i: "videoinfo", x: 9, y: 1, w: 3, h: 4, static: false },
  ],
  md: [
    { i: "alert", x: 0, y: 0, w: 1, h: 1, static: false },
    { i: "video", x: 0, y: 1, w: 2, h: 4, static: false },
    { i: "notice", x: 2, y: 1, w: 4, h: 4, static: false },
    { i: "playlist", x: 6, y: 1, w: 3, h: 4, static: false },
    { i: "review", x: 9, y: 1, w: 3, h: 4, static: false },
    { i: "videoinfo", x: 9, y: 1, w: 3, h: 4, static: false },
  ],
};

function Content({ size: { width } }) {
  const { mainPageLayouts, setMainPageLayouts } = useMainPageStore();
  const [currentLayout, setCurrentLayout] = useState([]);
  const [layouts, setLayouts] = useState(mainPageLayouts || initialLayouts);
  const [items, setItems] = useState(originalItems);

  const onLayoutChange = (_, allLayouts) => {
    console.log(allLayouts);
    console.log(_);
    setLayouts(allLayouts);
    setCurrentLayout(_);
  };

  const onLayoutSave = () => {
    setMainPageLayouts(layouts);
  };
  const onRemoveItem = (itemId) => {
    setItems(items.filter((i) => i !== itemId));
  };
  const onAddItem = (itemId) => {
    setItems([...items, itemId]);
  };

  return (
    <>
      <Topbar onLayoutSave={onLayoutSave} items={items} onAddItem={onAddItem} />
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        containerPadding={[0, 10]}
        margin={[10, 10]}
        breakpoints={{ lg: 1200, md: 996 }}
        cols={{ lg: 12, md: 10 }}
        rowHeight={60}
        width={width}
        onLayoutChange={onLayoutChange}
        measureBeforeMount={false}
      >
        {items.map((key) => (
          <div key={key}>
            <ComponentsSwitch item={key} onRemoveItem={onRemoveItem} />
          </div>
        ))}
      </ResponsiveGridLayout>
    </>
  );
}

export default withSize({ refreshMode: "debounce", refreshRate: 60 })(Content);
