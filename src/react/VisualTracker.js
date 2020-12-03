import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import Scheduler from "../helpers/Scheduler";

const VisualTracker = (props) => {
  const [activeColumn, setActiveColumn] = useState(1);
  const width = 900;

  Scheduler.pingTracker = (columnNum) => setActiveColumn(columnNum);

  let space = (activeColumn / 4) * 8;

  let activeColPosition = (activeColumn - 1) * ((width - 18) / 16) + space;

  return (
    <Typography variant="h3" style={{ marginLeft: activeColPosition }}>
      ^
    </Typography>
  );
};

export default VisualTracker;
