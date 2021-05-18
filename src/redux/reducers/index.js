import { combineReducers } from "redux";

import pokemon from "./pokemonReducer";
import modal from "./modalReducer";

export default function createReducer() {
  const rootReducer = combineReducers({
    pokemon,
    modal,
  });

  return rootReducer;
}
