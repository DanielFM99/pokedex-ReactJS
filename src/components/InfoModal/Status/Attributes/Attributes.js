import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  status: {
    fontSize: 12,
    marginBottom: "0.5rem",
  },

  subtext: {
    color: "#585858",
  },
};

class Attributes extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.status}>
        <h1>
          {this.props.title}
          <span className={classes.subtext}>{this.props.value}</span>
        </h1>
      </div>
    );
  }
}

export default withStyles(styles)(Attributes);
