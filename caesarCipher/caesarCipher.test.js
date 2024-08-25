const caesarCipher = require("./caesarCipher.js");

describe("caesarCipher", () => {
  it("xyz offset by 3 should return abc", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  it("xyz offset by 3 should return abc", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  it("xyz offset by 3 should return abc", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
