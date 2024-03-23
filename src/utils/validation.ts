export type ValidationType = {
  requiredMessage: string;
  pattern: {
    value: RegExp;
    message: string;
  };
};

export const nameValidation = (): ValidationType => {
  return {
    requiredMessage: "Name is required",
    pattern: {
      value: /^[a-z][a-z '-.,]{0,31}$|^$/i,
      message: "Invalid Name",
    },
  };
};
