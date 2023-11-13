const volum = (radio) => {
    const pi = Math.PI; // Utilizamos la constante Pi de JavaScript
    const volumen = (4 / 3) * pi * Math.pow(radio, 3);
    return volumen;
  }
  
  module.exports = volum;
