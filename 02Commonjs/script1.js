//Por defecto todos los scripts de nodejs tienen un objeto exports var exports = {}
var arreglo1 = ["Jean", "carlos"],
  arreglo2 = [1, 2, 3, 4];

// exports.arreglo1 = arreglo1;
// exports.arreglo2 = function () {
//   return arreglo2.length;
// };

//El objeto exports es un ayudante del module.exports
module.exports = arreglo2;
