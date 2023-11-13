const valor = require('./valor');

test('calcula el valor absoluto de un número positivo', () => {
  expect(valor(5)).toBe(5);
});