// mapFn

export function mapFn(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let newElement = callback(array[i], i, array);
    newArray.push(newElement);
  }
  return newArray;
}

// filterFn

export function filterFn(array, callback) {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

// everyFn

export function everyFn(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    } else return false;
  }
}

// reduceFn

export function reduceFn(array, callback, initial = 0) {
  for (let i = 0; i < array.length; i++) {
    initial = callback(initial, array[i], i, array);
  }
  return initial;
}

// reduceRightFn

export function reduceRightFn(array, callback, initial = 0) {
  for (let i = array.length - 1; i >= 0; i--) {
    initial = callback(initial, array[i], i, array);
  }
  return initial;
}

// someFn

export function someFn(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}
