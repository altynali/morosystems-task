import { convertTime } from "./convertTime";

describe("convertTime", () => {
  test("testing time", () => {
    expect(convertTime(1711183138435)).toBe("23. 3. 2024 9:38:58");
  });
});
