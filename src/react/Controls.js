import React, { useState } from "react";
import { Button, Grid, InputAdornment, TextField } from "@material-ui/core";
import Scheduler from "../helpers/Scheduler";

const Controls = (props) => {
  const [tempo, setTempo] = useState(Scheduler.tempo);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });
  let icon = null;

  const playStopClick = (event) => {
    if (isPlaying) {
      Scheduler.stop();
      setIsPlaying(false);
    } else {
      Scheduler.start();
      setIsPlaying(true);
    }
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

  if (isPlaying) {
    icon = "Stop";
  } else {
    icon = "Play";
  }

  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={playStopClick}
        >
          {icon}
        </Button>
      </Grid>
      <Grid item>
        <TextField
          label="Tempo"
          type="number"
          value={tempo}
          onChange={changeTempo}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            inputProps: { min: 40, max: 220 },
            endAdornment: <InputAdornment position="start">BPM</InputAdornment>,
          }}
          error={error.isError}
          helperText={error.message}
        />
      </Grid>
    </Grid>
  );
};

export default Controls;
