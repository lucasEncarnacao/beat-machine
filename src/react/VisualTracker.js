import React, { useState } from "react";
import Scheduler from "../helpers/Scheduler";

const VisualTracker = (props) => {
  const [activeColumn, setActiveColumn] = useState(1);
  const width = 900;

  Scheduler.pingTracker = (columnNum) => setActiveColumn(columnNum);

  let space = Math.floor((activeColumn - 1) / 4) * 2;

  let activeColPosition = (activeColumn - 1) * ((width + 8) / 16) + space + 10;

  return (
    <img
      src="upArrow.png"
      alt="Tracker"
      style={{ marginLeft: activeColPosition, width: "20px" }}
    />
  );
};

export default VisualTracker;
