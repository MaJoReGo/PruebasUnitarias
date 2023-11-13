const factorial = (numero) => {
    if (numero < 0) {
      return "No se puede calcular el factorial de un número negativo";
    } else if (numero === 0) {
      return 1;
    } else {
      let resultado = 1;
      for (let i = 1; i <= numero; i++) {
        resultado *= i;
      }
      return resultado;
    }
  }
module.exports = factorial;
  