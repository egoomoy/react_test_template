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
  "title",
  "video",
  "notice",
  "playlist",
  "review",
  "videoinfo",
];

const initialLayouts = {
  lg: [
    {
      w: 12,
      h: 1,
      x: 0,
      y: 0,
      i: "title",
      moved: false,
      static: false,
    },
    {
      w: 9,
      h: 13,
      x: 0,
      y: 1,
      i: "video",
      moved: false,
      static: false,
    },
    {
      w: 6,
      h: 3,
      x: 6,
      y: 14,
      i: "notice",
      moved: false,
      static: false,
    },
    {
      w: 3,
      h: 13,
      x: 9,
      y: 1,
      i: "playlist",
      moved: false,
      static: false,
    },
    {
      w: 6,
      h: 6,
      x: 6,
      y: 17,
      i: "review",
      moved: false,
      static: false,
    },
    {
      w: 6,
      h: 8,
      x: 0,
      y: 14,
      i: "videoinfo",
      moved: false,
      static: false,
    },
  ],
  md: [
    {
      w: 10,
      h: 1,
      x: 0,
      y: 7,
      i: "alert",
      moved: false,
      static: false,
    },
    {
      w: 10,
      h: 7,
      x: 0,
      y: 0,
      i: "video",
      moved: false,
      static: false,
    },
    {
      w: 10,
      h: 2,
      x: 0,
      y: 8,
      i: "notice",
      moved: false,
      static: false,
    },
    {
      w: 3,
      h: 5,
      x: 7,
      y: 10,
      i: "playlist",
      moved: false,
      static: false,
    },
    {
      w: 10,
      h: 5,
      x: 0,
      y: 15,
      i: "review",
      moved: false,
      static: false,
    },
    {
      w: 7,
      h: 5,
      x: 0,
      y: 10,
      i: "videoinfo",
      moved: false,
      static: false,
    },
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
