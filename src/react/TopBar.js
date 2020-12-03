import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NetworkLinks from "./NetworkLinks";

const useStyles = makeStyles((theme) => ({
  bar: {
    padding: theme.spacing(2),
    background: "linear-gradient(90deg, #9E2994 0%, #FF2E5F 50%, #FFD952 100%)",
  },
}));

const TopBar = (props) => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.bar}>
      <Grid item xs>
        <Typography variant="h2">Beat Machine</Typography>
      </Grid>

      <Grid item>
        <NetworkLinks />
      </Grid>
    </Grid>
  );
};

export default TopBar;
