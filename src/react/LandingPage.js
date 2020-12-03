import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/scrollSection.css";
import NetworkLinks from "./NetworkLinks";

const useStyles = makeStyles((theme) => ({
  page: {
    height: "100vh",
  },
  container: {
    height: "70%",
    background: "linear-gradient(90deg, #9E2994 0%, #FF2E5F 50%, #FFD952 100%)",
  },
  contents: {
    height: "100%",
    padding: theme.spacing(4),
  },
  icon: {
    width: "40px",
    paddingTop: "8px",
    paddingLeft: "16px",
  },
  image: {
    height: "30%",
    backgroundImage: "url('club.jpg')",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  },
  scrollSection: {
    paddingBottom: theme.spacing(3),
    animation: "fade-in-out 1s linear infinite alternate",
  },
  blurb: {
    backgroundColor: "#FFF",
    borderRadius: "15px",
    boxShadow: "5px 5px 5px #000",
  },
}));

const LandingPage = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.page}>
      <div className={classes.image} />
      <Box p={4} borderTop={2} className={classes.container}>
        <Grid container justify="center" className={classes.contents}>
          <Grid item xs={12}>
            <Typography variant="h2" align="center">
              Welcome to the Beat Machine
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box px={20}>
              <Box p={3} className={classes.blurb}>
                <Typography variant="h4" align="justify">
                  This project was made in 6 days for a Mintbean Hackathon.
                  Toggle sounds by clicking the squares in the grid and press
                  PLAY to hear your masterpiece. Adjust the tempo to make the
                  perfect beat!
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <NetworkLinks />
          </Grid>

          <Grid
            item
            xs={12}
            container
            direction="column"
            alignItems="center"
            className={classes.scrollSection}
          >
            <Typography variant="h4">Scroll for beats</Typography>
            <img
              src="downArrow.png"
              alt="down arrow"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LandingPage;
