import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import SoundColumn from "./SoundColumn";
import Scheduler from "../helpers/Scheduler";
import ActiveSounds from "../helpers/ActiveSounds";

const Visualizer = (props) => {
  const [activeColumn, setActiveColumn] = useState(-1);
  const SOUND_NAMES = [
    "Clap",
    "Hi-Hat",
    "Snare",
    "Alt_Snare",
    "Alt_Snare_2",
    "Kick",
  ];
  let activeSounds = ActiveSounds.getActiveSoundsFromColumn(activeColumn);

  Scheduler.pingVisualizer = (columnNum) => setActiveColumn(columnNum);

  const soundColumns = SOUND_NAMES.map((soundName, index) => {
    let isActive = !!activeSounds?.find((soundObj) => {
      return soundObj.soundName === soundName;
    });

    return (
      <Grid item key={soundName}>
        <SoundColumn soundNum={index + 1} isActive={isActive} />
      </Grid>
    );
  });

  return (
    <Grid container spacing={1}>
      {soundColumns}
    </Grid>
  );
};

export default Visualizer;
