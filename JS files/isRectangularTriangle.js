export function isRectangularTriangle(x1, x2, x3) {
  if (x1 > x2 && x1 > x3) {
    if (Math.pow(x2, 2) + Math.pow(x3, 2) === Math.pow(x1, 2)) {
      return true;
    }
  } else if (x2 > x3 && x2 > x1) {
    if (Math.pow(x1, 2) + Math.pow(x3, 2) === Math.pow(x2, 2)) {
      return true;
    }
  } else if (x3 > x2 && x3 > x1) {
    if (Math.pow(x1, 2) + Math.pow(x2, 2) === Math.pow(x3, 2)) {
      return true;
    }
  } else
    console.log(
      "You can't make a rectangular triangle with these lengths: " +
        x1 +
        ', ' +
        x2 +
        ', ' +
        x3
    );
  return false;
}
