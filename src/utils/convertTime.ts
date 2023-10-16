export const convertTime = (timestamp: number) => {
  const date = new Date(timestamp)
  return date.toLocaleString()
}
