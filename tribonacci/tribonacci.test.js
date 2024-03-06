const tribonacci = require("./tribonacci");

test("if array length less than 3, return null", () => {
  expect(tribonacci([], 4)).toEqual(null);
  expect(tribonacci([1], 4)).toEqual(null);
  expect(tribonacci([1, 2], 4)).toEqual(null);
});

test("if one element of array is not number, return null", () => {
  expect(tribonacci(["a", 3, 3, 3, 3], 4)).toBe(null);
});

test("if n is not number, return null", () => {
  expect(tribonacci([1, 1, 1], "a")).toBe(null);
  expect(tribonacci([1, 1, 1], [])).toEqual(null);
  expect(tribonacci([1, 1, 1], false)).toEqual(null);
  expect(tribonacci([1, 1, 1], {})).toEqual(null);
});

test("with array of numbers and a number(n), return n length array with tribonacci formula", () => {
  expect(tribonacci([1, 1, 1], 5)).toEqual([1, 1, 1, 3, 5]);
  expect(tribonacci([1, 1, 1, 1, 1], 10)).toEqual([
    1, 1, 1, 1, 1, 3, 5, 9, 17, 31,
  ]);
});
