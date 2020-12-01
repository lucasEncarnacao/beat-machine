import React from "react";
import { Grid } from "@material-ui/core";
import BeatColumn from "./BeatColumn";
import ActiveSounds from "../helpers/ActiveSounds";

const BeatGrid = (props) => {
  const SOUND_NAMES = [
    "Clap",
    "Hi-Hat",
    "Snare",
    "Alt_Snare",
    "Alt_Snare_2",
    "Kick",
  ];
  const quarterBeats = [...Array(16).keys()];

  ActiveSounds.setUpActiveSounds(SOUND_NAMES, quarterBeats);

  const columns = quarterBeats.map((i) => {
    return (
      <Grid item key={i}>
        <BeatColumn column={i + 1} soundNames={SOUND_NAMES} />
      </Grid>
    );
  });

  return <Grid container>{columns}</Grid>;
};

export default BeatGrid;
