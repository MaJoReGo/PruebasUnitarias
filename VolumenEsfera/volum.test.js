const volum = require('./volum');

test('calcula el volumen de una esfera correctamente', () => {
  expect(volum(3)).toBeCloseTo(113.097, 3);
});