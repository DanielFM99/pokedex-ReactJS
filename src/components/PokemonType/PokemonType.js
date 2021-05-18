import React from "react";
import classnames from "classnames";
import { withStyles, Box } from "@material-ui/core";

import getColor from "../../utils/getColor";

const styles = {
  power: {
    borderRadius: "5px",
    marginRight: "5px",
    padding: "0 5% 0 5%",
    display: "inline-block",
  },
  small: {
    color: "white",
    fontSize: 16,
  },
  big: {
    color: "white",
    fontSize: 30,
  },
  green: {
    backgroundColor: "#7ac74c",
  },
  purple: {
    backgroundColor: "#a33ea1",
  },
  red: {
    backgroundColor: "#ee8130",
  },
  gray: {
    backgroundColor: "#a8a77a",
  },
  darkOrange: {
    backgroundColor: "#c22e28",
  },
  purpleBlue: {
    backgroundColor: "#a98ff3",
  },
  brown: {
    backgroundColor: "#e2bf65",
  },
  darkBrown: {
    backgroundColor: "#b6a136",
  },
  lightGreen: {
    backgroundColor: "#a6b91a",
  },
  lightPurple: {
    backgroundColor: "#735797",
  },
  silver: {
    backgroundColor: "#b7b7ce",
  },
  blue: {
    backgroundColor: "#6390f0",
  },
  yellow: {
    backgroundColor: "#f7d02c",
  },
  pink: {
    backgroundColor: "#f95587",
  },
  iceBlue: {
    backgroundColor: "#96d9d6",
  },
  purplePink: {
    backgroundColor: "#6f35fc",
  },
  lightBlack: {
    backgroundColor: "#705746",
  },
  lightPink: {
    backgroundColor: "#d685ad",
  },
  black: {
    backgroundColor: "black",
  },
};

class PokemonType extends React.Component {
  render() {
    const { type, size, classes } = this.props;
    return (
      <Box
        boxShadow={3}
        className={classnames(classes.power, classes[getColor(type)])}
      >
        <p className={classes[size]}>{type}</p>
      </Box>
    );
  }
}

export default withStyles(styles)(PokemonType);
