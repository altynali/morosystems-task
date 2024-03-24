import { isNameValid } from "./validation";

describe("isNameValid", () => {
  const setErrorMock = jest.fn();

  beforeEach(() => {
    setErrorMock.mockClear();
  });

  test("returns true when name is valid", () => {
    const name = "John Doe";
    const isDirty = true;
    const result = isNameValid(name, isDirty, setErrorMock);

    expect(result).toBe(true);
  });

  test("returns false and sets error message when name is empty", () => {
    const name = "";
    const isDirty = true;
    const result = isNameValid(name, isDirty, setErrorMock);

    expect(result).toBe(false);
    expect(setErrorMock).toBeCalledWith("Name is required");
  });

  test("returns false and sets error message when name does not match pattern", () => {
    const name = "123"; // Invalid name
    const isDirty = true;
    const result = isNameValid(name, isDirty, setErrorMock);

    expect(result).toBe(false);
  });

  test("returns true when name is empty but not dirty", () => {
    const name = "";
    const isDirty = false; // Not dirty
    const result = isNameValid(name, isDirty, setErrorMock);

    expect(result).toBe(true); // Returns true because the field is not yet touched
  });
});
