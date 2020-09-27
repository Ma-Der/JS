export function mapFnR(array, callback) {
  return array.reduce(
    (newArray, element) => [...newArray, callback(element)],
    []
  );
}

export function filterFnR(arr, callback) {
  return arr.reduce(
    (newArray, element) =>
      callback(element) ? [...newArray, element] : [...newArray],
    []
  );
}

export function everyFnR(arr, callback) {
  return arr.reduce((element) => (callback(element) ? true : false));
}

export function someFnR(arr, callback) {
  return arr.reduce(
    (init, element) => (callback(element) ? true : init),
    false
  );
}
