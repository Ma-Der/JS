export function mapFnR(array, callback) {
  if (Array.isArray(array) && typeof callback === 'function') {
    return array.reduce((newArray, element, index, arr) => {
      if (callback(element, index, arr)) {
        return [...newArray, callback(element, index, arr)];
      }
    }, []);
  } else {
    throw new Error('First argument must be array, second must be function.');
  }
}

export function filterFnR(array, callback) {
  if (Array.isArray(array) && typeof callback === 'function') {
    return array.reduce(
      (newArray, element, index, arr) =>
        callback(element, index, arr) ? [...newArray, element] : [...newArray],
      []
    );
  } else
    throw new Error(
      'First argument must be an array, second argument must be function.'
    );
}

export function everyFnR(array, callback) {
  if (Array.isArray(array) && typeof callback === 'function') {
    return array.reduce((accumulator, currElement, index, arr) => {
      if (!callback(accumulator, index, arr)) {
        arr.splice(index);
        return false;
      } else return true;
    });
  } else
    throw new Error(
      'First argument should be an array, second should be function.'
    );
}

export function someFnR(array, callback) {
  if (Array.isArray(array) && typeof callback === 'function') {
    return array.reduce((accumulator, currElement, index, arr) => {
      if (callback(accumulator, index, arr)) {
        arr.splice(index);
        return true;
      } else return false;
    });
  } else
    throw new Error(
      'First argument should be an array and second argument should be a function'
    );
}
