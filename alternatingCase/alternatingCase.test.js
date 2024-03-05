require("./alternatingCase.js");
test("change lower to upper", () => {
  expect("maider".toAlternatingCase()).toBe("MAIDER");
});

test("chango upper to lowet", () => {
  expect("MAIDER".toAlternatingCase()).toBe("maider");
});

test("with empty string returns empty string", () => {
  expect("".toAlternatingCase()).toBe("");
});

test("numbers do not change", () => {
  expect("113".toAlternatingCase()).toBe("113");
});

test("symbols do not change", () => {
  expect("?^$".toAlternatingCase()).toBe("?^$");
});
