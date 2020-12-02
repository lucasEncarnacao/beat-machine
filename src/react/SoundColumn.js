import React from "react";
import "../styles/visualizer.css";

const SoundColumn = (props) => {
  const { soundNum, isActive } = props;
  let className = "color-" + soundNum;

  if (isActive) {
    className += " pulse-in";
  } else {
    className += " pulse-out";
  }

  return <div className={className} />;
};

export default SoundColumn;
