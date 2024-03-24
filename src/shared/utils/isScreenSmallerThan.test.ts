import { isScreenSmallerThan } from "./isScreenSmallerThan";

describe("isScreenSmallerThan", () => {
  test("returns true if screen width is smaller than the passed width", () => {
    const mockWindow = {
      screen: {
        width: 400,
      },
    };
    expect(isScreenSmallerThan(500, mockWindow as Window)).toBe(true);
  });

  test("returns false if screen width is equal to or larger than the passed width", () => {
    const mockWindow = {
      screen: {
        width: 600,
      },
    };
    expect(isScreenSmallerThan(500, mockWindow as Window)).toBe(false);
  });
});
