import React from "react";
import "./Planscreen.css";

const Planscreen = () => {
  return (
    <div className="planeScreen">
      <div className="planscreenInfo">
        <h5>Premium</h5>
        <h6>4K + HDR</h6>
      </div>
      <button>Subscribe</button>
      <br />
      <div className="planscreenInfo">
        <h5>Basic</h5>
        <h6>720p</h6>
      </div>
      <button>Subscribe</button>
      <br />
      <div className="planscreenInfo">
        <h5>Standerd</h5>
        <h6>1080p</h6>
      </div>
      <button>Subscribe</button>
      <br />
    </div>
  );
};

export default Planscreen;
