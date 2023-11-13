const factorial = require('./factorial');

test('calcula el factorial de 5', () => {
  expect(factorial(5)).toBe(120);
});
