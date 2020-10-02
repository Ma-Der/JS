// mapFn

export function mapFn(array, callback) {
  if (Array.isArray(array) && typeof callback === 'function') {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      let newElement = callback(array[i], i, array);
      newArray.push(newElement);
    }
    return newArray;
  } else
    throw new Error(
      'First argument should be an array and second argument should be a function'
    );
}

// filterFn

export function filterFn(array, callback) {
  if (Array.isArray(array) && typeof callback === 'function') {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        filteredArray.push(array[i]);
      }
    }
    return filteredArray;
  } else
    throw new Error(
      'First argument should be an array and second argument should be a function'
    );
}

// everyFn

export function everyFn(array, callback) {
  if (typeof callback === 'function' && Array.isArray(array)) {
    let bool = true;
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        bool = true;
      } else {
        bool = false;
        break;
      }
    }
    return bool;
  } else if (!Array.isArray(array) && !(callback === 'function')) {
    throw new Error(
      '1st variable needs to be an array, 2nd variable must be a function.'
    );
  }
}

// reduceFn

export function reduceFn(array, callback, initial) {
  if (typeof callback === 'function' && Array.isArray(array)) {
    let prevVal = null;
    if (typeof initial !== 'undefined') {
      prevVal = initial;
      if (array.length == 0) {
        return prevVal;
      }
      for (let i = 0; i < array.length; i++) {
        prevVal = callback(prevVal, array[i], i, array);
      }
      return prevVal;
    } else {
      if (array.length == 0) {
        throw TypeError('Array is empty.');
      }
      for (let i = 0; i < array.length; i++) {
        prevVal = callback(prevVal, array[i], i, array);
      }
      return prevVal;
    }
  } else if (!Array.isArray(array) && !(callback === 'function')) {
    throw new Error(
      '1st variable needs to be an array, 2nd variable must be a function.'
    );
  }
}

// reduceRightFn

export function reduceRightFn(array = array.reverse(), callback, initial) {
  if (typeof callback === 'function' && Array.isArray(array)) {
    let prevVal = null;
    if (typeof initial !== 'undefined') {
      prevVal = initial;
      if (array.length == 0) {
        return prevVal;
      }
      for (let i = 0; i < array.length; i++) {
        prevVal = callback(prevVal, array[i], i, array);
      }
      return prevVal;
    } else {
      if (array.length == 0) {
        throw TypeError('Array is empty.');
      }
      for (let i = 0; i < array.length; i++) {
        prevVal = callback(prevVal, array[i], i, array);
      }
      return prevVal;
    }
  } else if (!Array.isArray(array) && !(callback === 'function')) {
    throw new Error(
      '1st variable needs to be an array, 2nd variable must be a function.'
    );
  }
}

// someFn

export function someFn(array, callback) {
  if (Array.isArray(array) && typeof callback === 'function') {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return true;
      }
    }
    return false;
  } else
    throw new Error(
      'First argument should be an array and second argument should be a function'
    );
}
