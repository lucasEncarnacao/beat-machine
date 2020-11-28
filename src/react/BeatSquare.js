import React from "react";
import { Button, Grid } from "@material-ui/core";
import WavHelper from "../helpers/WavHelper";

const BeatSquare = (props) => {
  const { sound } = props;
  const wav = WavHelper.getWav(sound, 1);

  const squareClick = (event) => {
    wav.play();
  };

  return (
    <Grid item>
      <Button variant="contained" color="primary" onClick={squareClick}>
        {sound}
      </Button>
    </Grid>
  );
};

export default BeatSquare;
