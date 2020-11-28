import React from "react";
import { Grid } from "@material-ui/core";
import BeatColumn from "./BeatColumn";

const BeatGrid = (props) => {
  const INSTRUMENTS = ["kick", "snare", "hi-hat"];
  const beats = [...Array(16).keys()];

  const columns = beats.map((i) => {
    return (
      <Grid item key={i}>
        <BeatColumn column={i + 1} instruments={INSTRUMENTS} />
      </Grid>
    );
  });

  return <Grid container>{columns}</Grid>;
};

export default BeatGrid;
