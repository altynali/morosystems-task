export type ValidationType = {
  requiredMessage: string;
  pattern: {
    value: RegExp;
    message: string;
  };
};
