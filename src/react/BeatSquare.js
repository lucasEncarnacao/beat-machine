import React from "react";
import { Button, Grid } from "@material-ui/core";

const BeatSquare = (props) => {
  const { column, sound } = props;

  const squareClick = (event) => {
    console.log(sound + column);
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
