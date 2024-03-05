const anagrams = require("./anagrams");

test("return anagrams of the word existing in the array ", () => {
  expect(anagrams("abba", ["bbaa", "baba", "ddf", "aaabb", "abba"])).toEqual([
    "bbaa",
    "baba",
    "abba",
  ]);
});

test("with an empty string, return empty array ", () => {
  expect(anagrams("", ["bbaa", "baba", "ddf", "aaabb", "abba"])).toEqual([]);
});

test("with an empty array, return empty array ", () => {
  expect(anagrams("bbaa", [])).toEqual([]);
});
