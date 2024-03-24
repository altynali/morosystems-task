//function chceks if out screen is smaller than passed width
export const isScreenSmallerThan = (width: number, mockWindow?: Window) => {
  let screenWidth = window.screen.width;

  // Mocking screen width, for the test
  if (mockWindow) {
    screenWidth = mockWindow.screen.width;
  }

  return screenWidth < width;
};
