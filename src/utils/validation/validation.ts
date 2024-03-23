import { ValidationType } from "./types";

export const nameValidation: ValidationType = {
  requiredMessage: "Name is required",
  pattern: {
    value: /^[a-z][a-z '-.,]{0,31}$|^$/i,
    message: "Invalid Name",
  },
};

export const validateName = (
  name: string,
  isDirty: boolean,
  setError: (error: string) => void
) => {
  const { requiredMessage, pattern } = nameValidation;

  if (!name) {
    setError(requiredMessage);
    return false;
  }
  if (!isDirty && !name.match(pattern.value)) {
    setError(pattern.message);
    return false;
  }

  setError("");
  return true;
};
