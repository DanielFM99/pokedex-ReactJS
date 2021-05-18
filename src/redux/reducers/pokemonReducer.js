import c from "../constants/pokemonConstants";

const initialState = {
  favorites: [],
  pokemons: [],
  loading: false,
  success: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case c.ADD_POKEMON: {
      return {
        ...state,
        favorites: state.favorites.concat(action.pokemon),
      };
    }
    case c.REMOVE_POKEMON: {
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.name !== action.pokemon.name
        ),
      };
    }
    case c.GET_POKEMONS_REQUEST: {
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    }
    case c.GET_POKEMONS_SUCCESS: {
      return {
        ...state,
        pokemons: action.pokemons,
        loading: false,
        success: true,
        error: false,
      };
    }
    case c.GET_POKEMONS_FAILURE: {
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    }

    default:
      return state;
  }
};
