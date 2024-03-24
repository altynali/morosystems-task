export type PatternType = {
  value: RegExp;
  message: string;
};

export type ValidationType = {
  requiredMessage: string;
  pattern: PatternType;
};
