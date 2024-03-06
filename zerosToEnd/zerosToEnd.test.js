const moveZeros = require("./zerosToEnd");

test("array of numbers, return array with 0 at the end, keeping the order of rest", () => {
  expect(moveZeros([1, 0, 5, 6, 0, 7])).toEqual([1, 5, 6, 7, 0, 0]);
});

test("array of numbers and strings, return array with 0s at the end, keeping the order of rest", () => {
  expect(moveZeros([1, 0, "a", 5, 6, 0, "hello", 7])).toEqual([
    1,
    "a",
    5,
    6,
    "hello",
    7,
    0,
    0,
  ]);
});

test("array of whataever, return array with 0 at the end, keeping the order of rest", () => {
  expect(moveZeros([false, 1, { a: 2 }, [22], 0, 5, 6, 0, 7])).toEqual([
    false,
    1,
    { a: 2 },
    [22],
    5,
    6,
    7,
    0,
    0,
  ]);
});

test("inserting an empty array, returns an empty array", () => {
  expect(moveZeros([])).toEqual([]);
});
