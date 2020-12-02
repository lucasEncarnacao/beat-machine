import React, { useState } from "react";
import Scheduler from "../helpers/Scheduler";

const VisualTracker = (props) => {
  const [activeColumn, setActiveColumn] = useState(1);

  Scheduler.pingTracker = (columnNum) => setActiveColumn(columnNum);

  let activeColPosition = (activeColumn - 1) * 65;

  return <h1 style={{ marginLeft: activeColPosition }}>^</h1>;
};

export default VisualTracker;
