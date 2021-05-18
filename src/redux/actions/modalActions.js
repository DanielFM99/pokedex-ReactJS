import c from "../constants/modalConstants";

export const openModal = (pokemon) => ({
  type: c.OPEN_MODAL,
  pokemon,
});

export const closeModal = () => ({
  type: c.CLOSE_MODAL,
});
