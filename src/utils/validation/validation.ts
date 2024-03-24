import { ValidationType } from "./types";

//validating condition for our name field
export const nameValidation: ValidationType = {
  requiredMessage: "Name is required",
  pattern: {
    value: /^[a-z][a-z '-.,]{0,31}$|^$/i,
    message: "Invalid Name",
  },
};

//function validats our name field, returns boolean
export const isNameValid = (
  name: string,
  isDirty: boolean,
  setError: (error: string) => void
) => {
  const { requiredMessage, pattern } = nameValidation;

  if (isDirty) {
    //if name is empty, it is an error
    if (!name) {
      setError(requiredMessage);
      return false;
    }
    //if name doesn't match our regular expression and it is touched
    if (!name.match(pattern.value)) {
      setError(pattern.message);
      return false;
    }
  }

  //otherwise there is no error and we want to return true
  setError("");
  return true;
};
