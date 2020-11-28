import React from "react";
import { Grid } from "@material-ui/core";
import BeatSquare from "./BeatSquare";

const BeatColumn = (props) => {
  const { column, instruments } = props;

  const beatColumn = instruments.map((instrument) => {
    return (
      <BeatSquare key={instrument} column={column} instrument={instrument} />
    );
  });

  return (
    <Grid container direction="column" alignItems="center" spacing={1}>
      {beatColumn}
    </Grid>
  );
};

export default BeatColumn;
