const objColor = {
  grass: "green",

  poison: "purple",

  fire: "red",

  normal: "gray",

  fighting: "darkOrange",

  flying: "purpleBlue",

  ground: "brown",

  rock: "darkBrown",

  bug: "lightGreen",

  ghost: "lightPurple",

  steel: "silver",

  water: "blue",

  electric: "yellow",

  psychic: "pink",

  ice: "iceBlue",

  dragon: "purplePink",

  dark: "lightBlack",

  fairy: "lightPink",

  shadow: "black",
};

export default function getColor(color) {
  return objColor[color];
}
