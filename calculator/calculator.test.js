const caculator = require("./calculator.js");

const func = caculator();

describe("caculator", () => {
  it("add", () => {
    expect(func.add(1, 100)).toBe(101);
  });
  it("subtract", () => {
    expect(func.subtract(100, 1)).toBe(99);
  });

  it("divide", () => {
    expect(func.divide(100, 2)).toBe(50);
  });

  it("multiply", () => {
    expect(func.multiply(2, 50)).toBe(100);
  });
});
