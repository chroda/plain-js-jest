const deg2rad = require("./deg2rad");

test("deg2rad result to be number", () => {
  expect(typeof deg2rad(180)).toBe("number");
});

test("deg2rad result to be 10", () => {
  expect(deg2rad(573).toFixed()).toBe("10");
});

test("deg2rad result to be NaN when empty", () => {
  expect(deg2rad()).toBe(NaN);
});

test("deg2rad result to be NaN when string passed", () => {
  expect(deg2rad("abc")).toBe(NaN);
});
