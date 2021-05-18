import React from "react";
import { withStyles } from "@material-ui/core/styles";

import PokemonType from "../../PokemonType/PokemonType";
import Attributes from "./Attributes/Attributes";

const styles = {
  PokemonType: {
    paddingBottom: "10%",
    display: "flex",
    flexDirection: "row",
    marginBottom: "0.5rem",
    marginTop: "1rem",
  },
};

class Status extends React.Component {
  render() {
    const { type, classes } = this.props;
    return (
      <div>
        <Attributes title="Altura: " value={this.props.height} />
        <Attributes title="Peso: " value={this.props.weigth} />
        <h1>Tipos:</h1>
        <div className={classes.PokemonType}>
          {type.map((element) => {
            return <PokemonType type={element} size="big" />;
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Status);
