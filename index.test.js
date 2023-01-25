const add = require("./index.js");

test('adds x and y', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(3, 4)).toBe(7);
  expect(add(-1, 5)).toBe(4);
});
