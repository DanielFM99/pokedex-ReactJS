import React from "react";
import { connect } from "react-redux";

import "./content.css";
import CardPokemon from "../CardPokemon/CardPokemon";
import InfoModal from "../InfoModal/InfoModal";
import { fetchPokemon } from "../../redux/actions/pokemonActions";
const loadingGif = "https://media.giphy.com/media/OKDrnAZk9dkiuhwo2Z/giphy.gif";

class Content extends React.Component {
  componentDidMount() {
    console.log(this.props.pokemons);
    if (this.props.pokemons.length === 0) {
      this.props.fetchPokemon();
    }
  }

  render() {
    const { pokemons, loading } = this.props;
    return (
      <div>
        <InfoModal />

        {!loading ? (
          <div className="container">
            {pokemons.map((pokemon) => {
              return (
                <CardPokemon
                  key={pokemon.name}
                  pokemon={pokemon}
                  handleFavorites={() => this.handlePokemonFavorites(pokemon)}
                />
              );
            })}
          </div>
        ) : (
          <div className="loading">
            <img src={loadingGif} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { pokemon, openedModal } = state.modal;
  const { pokemons, loading, favorites } = state.pokemon;

  return { pokemon, openedModal, favorites, pokemons, loading };
};

export default connect(mapStateToProps, { fetchPokemon })(Content);
