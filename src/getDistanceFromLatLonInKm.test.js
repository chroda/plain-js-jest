const getDistanceFromLatLonInKm = require("./getDistanceFromLatLonInKm");

test("getDistanceFromLatLonInKm result to be 0", () => {
  expect(getDistanceFromLatLonInKm(1, 1, 1, 1)).toBe(0);
});

test("getDistanceFromLatLonInKm result to be a number", () => {
  expect(typeof getDistanceFromLatLonInKm(1, 2, 3, 4)).toBe("number");
});

test("getDistanceFromLatLonInKm result to be a NaN when missing parameters", () => {
  expect(getDistanceFromLatLonInKm(1)).toBe(NaN);
});

test("getDistanceFromLatLonInKm result to be a NaN when wrong parameters passed", () => {
  expect(getDistanceFromLatLonInKm("a", "b", "c", "d")).toBe(NaN);
});

test("getDistanceFromLatLonInKm result to be a NaN empty", () => {
  expect(getDistanceFromLatLonInKm()).toBe(NaN);
});
