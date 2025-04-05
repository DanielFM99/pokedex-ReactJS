import axios from "axios";

import c from "../constants/pokemonConstants";
import upperCase from "../../utils/upperCase";

export const addPokemonFavorites = (pokemon) => ({
  type: c.ADD_POKEMON,
  pokemon,
});

export const removePokemonFavorites = (pokemon) => ({
  type: c.REMOVE_POKEMON,
  pokemon,
});

export const getPokemonsSuccess = (pokemons) => ({
  type: c.GET_POKEMONS_SUCCESS,
  pokemons,
});

export const getPokemonsRequest = () => ({
  type: c.GET_POKEMONS_REQUEST,
});

export const getPokemonsFailure = () => ({
  type: c.GET_POKEMONS_FAILURE,
});

function createPokemon(pokemon) {
  return {
    name: upperCase(pokemon.name),
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
    size: "small",
    type: pokemon.types.map((element) => element.type.name),
    height: pokemon.height,
    weigth: pokemon.weight,
    abilities: pokemon.abilities.map((element) =>
      upperCase(element.ability.name)
    ),
  };
}

export const fetchPokemon = () => (dispatch) => {
  const promises = [];
  dispatch(getPokemonsRequest());
  for (let i = 1; i <= 1025; i++) {
    const promise = axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
    promises.push(promise);
  }
  try {
    Promise.all(promises).then((resp) => {
      const arrayPokemons = Object.values(resp).map((r) =>
        createPokemon(r.data)
      );
      dispatch(getPokemonsSuccess(arrayPokemons));
    });
  } catch (e) {
    dispatch(getPokemonsFailure());
  }
};
