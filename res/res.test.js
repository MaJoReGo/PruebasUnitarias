const res = require('./res');

test('adds 4 - 2 to equal 2', () => {
    expect(res(4,2)).toBe(2);
});