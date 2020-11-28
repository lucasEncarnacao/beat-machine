import React from "react";
import { Button, Grid } from "@material-ui/core";

const BeatSquare = (props) => {
  const { column, instrument } = props;

  const squareClick = (event) => {
    console.log(instrument + column);
  };

  return (
    <Grid item>
      <Button variant="contained" color="primary" onClick={squareClick}>
        {instrument}
      </Button>
    </Grid>
  );
};

export default BeatSquare;
