const strLength = require('./stringLength');

test('count string length', () => {
  expect(strLength('mudasir')).toBe(7);
});