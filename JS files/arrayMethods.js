// mapFn

export function mapFn(array, callback) {
  
  if(!Array.isArray(array)) throw new Error("First argument must be an array.");
  if(!(typeof callback === 'function')) throw new Error("Second argument must be a function.");

    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      let newElement = callback(array[i], i, array);
      newArray.push(newElement);
    }
    return newArray;
}

// filterFn

export function filterFn(array, callback) {

  if(!Array.isArray(array)) throw new Error("First argument must be an array.");
  if(!(typeof callback === 'function')) throw new Error("Second argument must be a function.");
  
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

  if(!Array.isArray(array)) throw new Error("First argument must be an array.");
  if(!(typeof callback === 'function')) throw new Error("Second argument must be a function.");

  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false
    }
  }
  return true;
}

// reduceFn

export function reduceFn(array, callback, initial) {
  if(!Array.isArray(array)) throw new Error("1st variable needs to be an array.");
  if (!(typeof callback === 'function')) throw new Error("2nd variable must be a function.");
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

      prevVal=array[0];

      for (let i = 1; i < array.length; i++) {
        prevVal = callback(prevVal, array[i], i, array);
      }

      return prevVal;
    }
}

// reduceRightFn

export function reduceRightFn(array, callback, initial) {
const reversedArray = array.reverse();
return reduceFn(reversedArray, callback, initial);
}

// someFn

export function someFn(array, callback) {
  if(!Array.isArray(array)) throw new Error("First argument must be an array.");
  if (!(typeof callback === 'function')) throw new Error("Second argument must be a function.");

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}
