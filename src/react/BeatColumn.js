import React from "react";
import { Grid } from "@material-ui/core";
import BeatSquare from "./BeatSquare";

const BeatColumn = (props) => {
  const { column, sounds } = props;

  const beatColumn = sounds.map((sound) => {
    return <BeatSquare key={sound} column={column} sound={sound} />;
  });

  return (
    <Grid container direction="column" alignItems="center" spacing={1}>
      {beatColumn}
    </Grid>
  );
};

export default BeatColumn;
