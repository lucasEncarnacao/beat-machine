import React from "react";
import { Grid } from "@material-ui/core";
import BeatColumn from "./BeatColumn";

const BeatGrid = (props) => {
  const SOUNDS = [
    "Clap",
    "Hi-Hat",
    "Snare",
    "Alt_Snare",
    "Alt_Snare_2",
    "Kick",
  ];
  const beats = [...Array(16).keys()];

  const columns = beats.map((i) => {
    return (
      <Grid item key={i}>
        <BeatColumn column={i + 1} sounds={SOUNDS} />
      </Grid>
    );
  });

  return <Grid container>{columns}</Grid>;
};

export default BeatGrid;
