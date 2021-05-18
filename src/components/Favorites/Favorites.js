import React from "react";
import { connect } from "react-redux";

import CardPokemon from "../CardPokemon/CardPokemon";
import InfoModal from "../InfoModal/InfoModal";

class Favorites extends React.Component {
  render() {
    const { favorites } = this.props;
    return (
      <div>
        <InfoModal />
        <div className="container">
          {favorites.map((pokemon) => {
            return <CardPokemon pokemon={pokemon} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { favorites } = state.pokemon;

  return { favorites };
};

export default connect(mapStateToProps)(Favorites);
