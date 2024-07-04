const bossBabyRevenge = require("./bossBabyRevenge");

describe("bossBabyRevenge", () => {
  test("returns 'Invalid input' when input is not a string", () => {
    expect(bossBabyRevenge(123)).toBe("Invalid input");
    expect(bossBabyRevenge([])).toBe("Invalid input");
    expect(bossBabyRevenge({})).toBe("Invalid input");
  });

  test("return 'Bad boy' when shots start with 'R'", () => {
    expect(bossBabyRevenge("RSSRR")).toBe("Bad boy");
  });

  test("return 'Bad boy' when ends with 'S'", () => {
    expect(bossBabyRevenge("SSSRRRRS")).toBe("Bad boy");
  });

  test("returns 'Bad boy' when shot pattern is not valid", () => {
    expect(bossBabyRevenge("RRSSS")).toBe("Bad boy");
    expect(bossBabyRevenge("SSSRR")).toBe("Bad boy");
  });

  test("returns 'Bad boy' when revenge shots are less than initial shots", () => {
    expect(bossBabyRevenge("SRRSSR")).toBe("Bad boy");
  });
});
