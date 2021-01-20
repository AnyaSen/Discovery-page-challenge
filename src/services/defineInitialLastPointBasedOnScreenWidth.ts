export const defineInitialLastPointBasedOnScreenWidth = () => {
  if (window.innerWidth > 1100) {
    return 4;
  } else if (window.innerWidth <= 1100 && window.innerWidth > 720) {
    return 3;
  } else if (window.innerWidth <= 720 && window.innerWidth > 599) {
    return 2;
  } else if (window.innerWidth <= 599) {
    return 1;
  }
  return 3;
};
