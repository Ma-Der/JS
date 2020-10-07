export function isRectangularTriangle(x1, x2, x3) {
  if (
    typeof x1 === 'number' &&
    typeof x2 === 'number' &&
    typeof x3 === 'number'
  ) {
    if (!isNaN(x1) || !isNaN(x2) || !isNaN(x3)) {
      if (x1 > 0 && x2 > 0 && x3 > 0) {
        if (x1 + x2 <= x3 || x1 + x3 <= x2 || x2 + x3 <= x1) {
          throw new Error("You can't build triangle with these sides.");
        } else {
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
            throw new Error(
              "You can't make a rectangular triangle with these lengths: " +
                x1 +
                ', ' +
                x2 +
                ', ' +
                x3
            );
          return false;
        }
      } else throw new Error('All variables must be greater than zero.');
    } else throw new Error('One of the variables is not a number.');
  } else throw new Error('All variables must be a number.');
}
