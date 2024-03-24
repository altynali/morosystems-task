import { isNameValid, nameValidation } from "./nameValidation";

describe("isNameValid", () => {
  const setErrorMock = jest.fn();

  beforeEach(() => {
    setErrorMock.mockClear();
  });

  test("returns true when todo name is valid", () => {
    const name = "Todo Todo";
    const isDirty = true;
    const result = isNameValid(name, isDirty, setErrorMock);

    expect(result).toBe(true);
    expect(setErrorMock).toHaveBeenCalledWith("");
  });

  test("returns false and sets error message when name is empty", () => {
    const name = "";
    const isDirty = true;
    const result = isNameValid(name, isDirty, setErrorMock);

    expect(result).toBe(false);
    expect(setErrorMock).toHaveBeenCalledWith(nameValidation.requiredMessage);
  });

  test("returns false and sets error message when name does not match pattern", () => {
    const name = "123";
    const isDirty = true;
    const result = isNameValid(name, isDirty, setErrorMock);

    expect(result).toBe(false);
    expect(setErrorMock).toHaveBeenCalledWith(nameValidation.pattern.message);
  });

  test("returns true when name is empty but not dirty", () => {
    const name = "";
    const isDirty = false;
    const result = isNameValid(name, isDirty, setErrorMock);

    expect(result).toBe(true);
    expect(setErrorMock).toHaveBeenCalledWith("");
  });
});
