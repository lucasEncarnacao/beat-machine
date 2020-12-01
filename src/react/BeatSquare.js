import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import ActiveSounds from "../helpers/ActiveSounds";

const BeatSquare = (props) => {
  const { column, soundName } = props;
  const [isActive, setIsActive] = useState(false);
  let color = "primary";

  const squareClick = (event) => {
    ActiveSounds.setActiveSound(column, soundName, !isActive);
    setIsActive(!isActive);
  };

  if (isActive) {
    color = "secondary";
  }

  return (
    <Grid item>
      <Button variant="contained" color={color} onClick={squareClick}>
        {soundName}
      </Button>
    </Grid>
  );
};

export default BeatSquare;
