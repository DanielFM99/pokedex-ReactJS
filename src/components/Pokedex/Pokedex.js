import React from "react";
import Routes from "../Routes";
import { withStyles } from "@material-ui/core";

import Sidebar from "./Sidebar/Sidebar";

const styles = (theme) => ({
  root: {
    overflow: "hidden",
  },
  main: {
    backgroundColor: "#f24d67",
  },
  content: {
    display: "flex",
    flexDirection: "row",
  },
  pokedex: {
    backgroundColor: "white",
    height: "100vh",
    width: "100vw",
  },
});
function Pokedex(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <Sidebar />
      <div className={classes.content}>
        <div className={classes.pokedex}>
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Pokedex);
