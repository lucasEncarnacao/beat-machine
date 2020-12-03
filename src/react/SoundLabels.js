import React from "react";
import { Grid, Typography } from "@material-ui/core";

const SoundLabel = (props) => {
  const { names } = props;

  return names.map((name) => {
    let fixedName = name.replace(/_/g, " ");
    return (
      <Grid item key={name}>
        <Typography variant="h5" align="right">
          {fixedName}
        </Typography>
      </Grid>
    );
  });
};

export default SoundLabel;
