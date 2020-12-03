import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ScrollAnimation from "react-animate-on-scroll";
import Controls from "./Controls";
import BeatGrid from "./BeatGrid";
import TopBar from "./TopBar";

const useStyles = makeStyles((theme) => ({
  page: {
    height: "100vh",
  },
}));

const BeatMachinePage = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.page}>
      <TopBar />

      <Box pt={6}>
        <ScrollAnimation animateIn="fadeIn" delay={200}>
          <Controls />
          <BeatGrid />
        </ScrollAnimation>
      </Box>
    </Box>
  );
};

export default BeatMachinePage;
