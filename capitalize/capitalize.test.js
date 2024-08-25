const capitalize = require("./capitalize.js");

it("the string must start with a Capital letter", () => {
  expect(capitalize("hello Savelli")).toBe("Hello Savelli");
});

it("the string must start with a Capital letter", () => {
  expect(capitalize("Hello Savelli")).toBe("Hello Savelli");
});

it("the string must start with a Capital letter", () => {
  expect(capitalize("")).toBe("");
});

it("the string must start with a Capital letter", () => {
  expect(capitalize("1")).toBe("1");
});
