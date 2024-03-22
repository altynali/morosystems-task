export const isScreenSmallerThan = (width: number) => {
  const screenWidth = window.screen.width

  return screenWidth < width
}
