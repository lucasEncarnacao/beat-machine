import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "40px",
    paddingTop: "8px",
    paddingLeft: "16px",
  },
}));

const NetworkLinks = (props) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Typography variant="body1">Made by Lucas Encarnacao</Typography>
      </Grid>

      <Grid item>
        <a
          href="https://www.linkedin.com/in/lucasencarnacao/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="linkedInIcon.png"
            alt="linkedIn logo"
            className={classes.icon}
          />
        </a>
      </Grid>

      <Grid item>
        <a
          href="https://github.com/lucasEncarnacao/beat-machine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="gitHubIcon.png"
            alt="gitHub logo"
            className={classes.icon}
          />
        </a>
      </Grid>
    </Grid>
  );
};

export default NetworkLinks;
