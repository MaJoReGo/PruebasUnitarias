const mult = require('./mult');

test('adds 5 * 5 to equal 10', () => {
    expect(mult(5,5)).toBe(25);
});