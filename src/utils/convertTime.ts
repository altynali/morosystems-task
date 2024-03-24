//function converts date to locale string
export const convertTime = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};
