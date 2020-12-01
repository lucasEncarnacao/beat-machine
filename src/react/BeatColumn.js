import React from "react";
import { Grid } from "@material-ui/core";
import BeatSquare from "./BeatSquare";

const BeatColumn = (props) => {
  const { column, soundNames } = props;

  const beatColumn = soundNames.map((soundName) => {
    return <BeatSquare key={soundName} column={column} soundName={soundName} />;
  });

  return (
    <Grid container direction="column" alignItems="center" spacing={1}>
      {beatColumn}
    </Grid>
  );
};

export default BeatColumn;
