import React from "react";
import { Button } from "@material-ui/core";
import Scheduler from "../helpers/Scheduler";

const Controls = (props) => {
  const playClick = (event) => {
    Scheduler.start();
  };

  const stopClick = (event) => {
    Scheduler.stop();
  };

  return (
    <>
      <Button variant="contained" color="secondary" onClick={playClick}>
        Play
      </Button>
      <Button variant="contained" color="secondary" onClick={stopClick}>
        Stop
      </Button>
    </>
  );
};

export default Controls;
