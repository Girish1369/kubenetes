const sum = require("../src/app");

test("adds 2 + 3 to equal 5", () => {
  expect(sum(2, 3)).toBe(5);
});
