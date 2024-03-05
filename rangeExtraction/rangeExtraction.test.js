const solution = require("./rangeExtraction");

test("array of numbers, return string os numbers", () => {
  expect(solution([-10, -6, -3, 1, 3, 5, 7, 9, 10, 19, 20])).toEqual(
    "-10,-6,-3,1,3,5,7,9,10,19,20"
  );
});

test("output of three or more consecutive numbers is a range with the first number and the last number separeted with a dash", () => {
  expect(
    solution([
      -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17,
      18, 19, 20,
    ])
  ).toEqual("-10--8,-6,-3-1,3-5,7-11,14,15,17-20");
});

test("with an empty array, return empty string ", () => {
  expect(solution([])).toEqual("");
});
