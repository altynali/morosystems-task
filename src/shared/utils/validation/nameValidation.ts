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
    //when field is touched, it is error:
    //if name is empty
    if (!name) {
      setError(requiredMessage);
      return false;
    }

    //if name doesn't match our regular expression
    if (!name.match(pattern.value)) {
      setError(pattern.message);
      return false;
    }
  }

  //otherwise there is no error and we want to return true and clean the error message
  setError("");
  return true;
};
