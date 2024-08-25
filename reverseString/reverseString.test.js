const reverseString = require("./reverseString.js");
describe("capitalize", () => {
  it("the string must be reversed", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("the string must be reversed", () => {
    expect(reverseString("1123")).toBe("3211");
  });

  it("the string must be reversed", () => {
    expect(reverseString("<>>")).toBe(">><");
  });
});
