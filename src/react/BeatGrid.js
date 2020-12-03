import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BeatColumn from "./BeatColumn";
import ActiveSounds from "../helpers/ActiveSounds";
import SoundLabels from "./SoundLabels";
import VisualTracker from "./VisualTracker";
import Visualizer from "./Visualizer";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "900px",
  },
}));

const BeatGrid = (props) => {
  const classes = useStyles();
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

  const columns = [1, 2, 3, 4].map((i) => {
    const beat = [1, 2, 3, 4].map((j) => {
      return (
        <Grid item xs key={j}>
          <BeatColumn column={j + (4 * i - 4)} soundNames={SOUND_NAMES} />
        </Grid>
      );
    });
    return (
      <Grid item container xs justify="center" spacing={1} key={i}>
        {beat}
      </Grid>
    );
  });

  return (
    <Box m={3} pt={3}>
      <Grid container spacing={2}>
        <Grid item xs={2} container direction="column" justify="space-around">
          <SoundLabels names={SOUND_NAMES} />
        </Grid>

        <Grid item xs={10} container alignItems="flex-end">
          <Box className={classes.grid}>
            <Grid container justify="center" spacing={2}>
              {columns}
            </Grid>
          </Box>

          <Grid item xs container justify="center">
            <Grid item>
              <Box borderBottom={2}>
                <Visualizer />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={2} />
        <Grid item xs={10}>
          <Box pl={1}>
            <VisualTracker />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BeatGrid;
