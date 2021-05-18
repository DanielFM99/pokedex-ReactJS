import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  textHab: {
    color: "#585858",
    fontSize: "22px",
    marginLeft: "1.5rem",
    marginBottom: "0.2rem",
  },
};

class Skills extends React.Component {
  render() {
    const { abilities, classes } = this.props;
    return (
      <div>
        <h1>Habilidades:</h1>
        <ul>
          {abilities.map((element) => {
            return <li class={classes.textHab}>{element}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(Skills);
