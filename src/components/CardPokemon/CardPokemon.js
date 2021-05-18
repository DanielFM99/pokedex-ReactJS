import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { Paper, withStyles, Box } from "@material-ui/core";

import PokemonType from "../PokemonType/PokemonType";
import heart from "../../assets/heart.svg";
import info from "../../assets/info.svg";
import broken from "../../assets/broken.svg";
import { openModal } from "../../redux/actions/modalActions";
import {
  addPokemonFavorites,
  removePokemonFavorites,
} from "../../redux/actions/pokemonActions";

const styles = {
  namePokemon: {
    paddingLeft: "10%",
    fontSize: 20,
  },
  backgroundCard: {
    backgroundColor: "#bdc3c7",
    height: 365,
    width: 280,
    borderRadius: 20,
    padding: "25px 25px 0 25px",
  },
  pokemonCard: {
    display: "flex",
    justifyContent: "center",
    margin: 5,
  },
  pokemon: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 245,
  },
  containerImg: {
    textAlign: "center",
  },
  pokemonImg: {
    height: 180,
    width: "auto",
  },
  pokemonType: {
    paddingBottom: "10%",
    display: "flex",
    flexDirection: "row",
  },
  paddingPokemonTypeSmall: {
    paddingLeft: "10%",
  },
  info: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "white",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    cursor: "pointer",
    height: 40,
    width: "auto",
    paddingRight: "5%",
  },
};

class CardPokemon extends React.Component {
  findPokemon = (pokemon) => {
    const { favorites } = this.props;
    return favorites.find(
      (pokemonSearched) => pokemonSearched.name === pokemon.name
    );
  };

  openModal = (pokemon) => {
    this.props.dispatch(openModal(pokemon));
  };

  handlePokemonFavorites = (pokemon) => {
    if (!this.findPokemon(pokemon)) {
      this.props.dispatch(addPokemonFavorites(pokemon));
    } else {
      this.props.dispatch(removePokemonFavorites(pokemon));
    }
  };

  render() {
    const { pokemon, classes } = this.props;
    return (
      <div className={classes.pokemonCard}>
        <Paper elevation={10} className={classes.backgroundCard}>
          <Paper elevation={3} className={classes.pokemon}>
            <h1 className={classes.namePokemon}>{pokemon.name}</h1>
            <div className={classes.containerImg}>
              <img
                className={classes.pokemonImg}
                src={pokemon.image}
                alt={`Imagem de um ${pokemon.name}`}
              />
            </div>
            <div
              className={classnames(
                classes.pokemonType,
                classes.paddingPokemonTypeSmall
              )}
            >
              {pokemon.type.map((type) => {
                return <PokemonType key={type} type={type} size="small" />;
              })}
            </div>
          </Paper>
          <Paper elevation={3} className={classes.info}>
            <img
              src={info}
              alt="favoritar pokemon"
              onClick={() => this.openModal(pokemon)}
              className={classes.icon}
            />
            <img
              src={this.findPokemon(pokemon) ? broken : heart}
              alt="favoritar pokemon"
              onClick={() => this.handlePokemonFavorites(pokemon)}
              className={classes.icon}
            />
          </Paper>
        </Paper>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { favorites } = state.pokemon;
  return { favorites };
};

export default connect(mapStateToProps)(withStyles(styles)(CardPokemon));
