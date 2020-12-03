import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ActiveSounds from "../helpers/ActiveSounds";

const useStyles = makeStyles((theme) => ({
  button: {
    minWidth: "40px",
    height: "40px",
  },
}));

const BeatSquare = (props) => {
  const classes = useStyles();
  const [isActive, setIsActive] = useState(false);
  const { column, soundName } = props;
  let color = "primary";

  const squareClick = (event) => {
    ActiveSounds.setActiveSound(column, soundName, !isActive);
    setIsActive(!isActive);
  };

  if (isActive) {
    color = "secondary";
  }

  return (
    <Button
      variant="contained"
      color={color}
      onClick={squareClick}
      className={classes.button}
    />
  );
};

export default BeatSquare;
