const modu = (a, b) => {
    if (b === 0) {
        return "Error: No se puede calcular el módulo entre cero.";
    }
    return a % b;
}

module.exports = modu;
