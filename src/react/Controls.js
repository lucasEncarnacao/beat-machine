import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import Scheduler from "../helpers/Scheduler";

const Controls = (props) => {
  const [tempo, setTempo] = useState(Scheduler.tempo);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const playClick = (event) => {
    Scheduler.start();
  };

  const stopClick = (event) => {
    Scheduler.stop();
  };

  const changeTempo = (event) => {
    let newTempo = event.currentTarget.value;

    if (newTempo < 40 || newTempo > 220) {
      setError({ isError: true, message: "Out of bounds" });
    } else {
      setError({ isError: false, message: "" });
    }

    setTempo(newTempo);
    Scheduler.tempo = newTempo;
  };

  return (
    <>
      <Button variant="contained" color="secondary" onClick={playClick}>
        Play
      </Button>
      <Button variant="contained" color="secondary" onClick={stopClick}>
        Stop
      </Button>
      <TextField
        label="Tempo"
        type="number"
        value={tempo}
        onChange={changeTempo}
        InputLabelProps={{ shrink: true }}
        InputProps={{ inputProps: { min: 40, max: 220 } }}
        variant="filled"
        error={error.isError}
        helperText={error.message}
      />
    </>
  );
};

export default Controls;
