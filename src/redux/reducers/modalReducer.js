import c from "../constants/modalConstants";

const initialState = {
  openedModal: false,
  pokemon: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case c.OPEN_MODAL: {
      return {
        ...state,
        openedModal: true,
        pokemon: action.pokemon,
      };
    }
    case c.CLOSE_MODAL: {
      return {
        ...state,
        openedModal: false,
      };
    }
    default:
      return state;
  }
};
