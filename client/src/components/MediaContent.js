import React, { useRef, useState } from "react";

///import "node_modules/video-react/dist/video-react.css"; // import css
import groom from "../media/video/groom.mp4";
import hands from "../media/video/hands.mp4";
import marriage from "../media/video/marriage.mp4";
import wedding from "../media/video/wedding.mp4";

const MediaContent = () => {
  const videoRef = useRef(null);

  const videos = [groom, hands, marriage, wedding];
  const [videoState, setVidoeState] = useState(0);

  const handleEnded = () => {
    setVidoeState(videoState + 1 >= videos.length ? 0 : videoState + 1);
  };

  return (
    <div className="MediaContent">
      <div className="videoContent">
        <video
          ref={videoRef}
          controls={false}
          autoPlay={true}
          muted={true}
          loop={false}
          src={videos[videoState]}
          type="video/mp4"
          onEnded={handleEnded}
        />
      </div>
    </div>
  );
};

export default MediaContent;
