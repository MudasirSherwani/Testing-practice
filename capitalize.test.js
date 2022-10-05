const capitalize = require('./capitalize.js');

test('string should be capitalize first char test', () => {
  expect(capitalize('mudasir')).toBe('Mudasir');
});