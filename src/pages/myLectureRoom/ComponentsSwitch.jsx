import React from "react";
import Playlist from "./components/Playlist";
import Notice from "./components/Notice";
import SysAlert from "./components/SysAlert";
import Video from "./components/Video";
import Review from "./components/Review";
import VideoInfo from "./components/VideoInfo";

/**
 * 이 페이지는 어떻게해야할 지 모르겠다.
 * 하드코딩밖에없나..?도저히 답이 안나옴
 * item 이름을 단순 no으로 잡으면 되긴할 텐데, 개발/운영계가 다르게 매겨질 수 있음
 * 유니크한 이름으로 지울 수 있다면 제일 좋은데, no을 base encoding해서 저장해야하나 이것도 답은 아니네
 */

const ComponentsSwitch = ({ item, onRemoveItem }) => {
  switch (item) {
    case "alert":
      return (
        <>
          <SysAlert
            item={item}
            onRemoveItem={onRemoveItem}
            backgroundColor="#66b115"
          />
        </>
      );
    case "video":
      return (
        <>
          <Video
            item={item}
            onRemoveItem={onRemoveItem}
            backgroundColor="#66b115"
          />
        </>
      );
    case "notice":
      return (
        <>
          <Notice
            item={item}
            onRemoveItem={onRemoveItem}
            backgroundColor="#66b115"
          />
        </>
      );
    case "playlist":
      return (
        <>
          <Playlist
            item={item}
            onRemoveItem={onRemoveItem}
            backgroundColor="#66b115"
          />
        </>
      );
    case "review":
      return (
        <>
          <Review
            item={item}
            onRemoveItem={onRemoveItem}
            backgroundColor="#66b115"
          />
        </>
      );
    case "videoinfo":
      return (
        <>
          <VideoInfo
            item={item}
            onRemoveItem={onRemoveItem}
            backgroundColor="#66b115"
          />
        </>
      );
    default:
      return "None";
  }
};

export default ComponentsSwitch;
