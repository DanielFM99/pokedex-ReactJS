export default String.prototype.capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
};
