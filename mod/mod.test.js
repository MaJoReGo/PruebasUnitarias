const modu = require('./mod');

test('calculates modulo of 6 % 6', () => {
    expect(modu(6, 6)).toBe(0);
});