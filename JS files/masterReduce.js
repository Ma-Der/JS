export function mapFnR(array, callback) {

  if (!Array.isArray(array)) throw new Error("First argument should be an array.");
  if(!(typeof callback === 'function')) throw new Error("Second argument needs to be a function.");

  return array.reduce((newArray, element, index, arr) => {
      return [...newArray, callback(element, index, arr)];
  }, []);
}

export function filterFnR(array, callback) {

  if (!Array.isArray(array)) throw new Error("First argument should be an array.");
  if(!(typeof callback === 'function')) throw new Error("Second argument needs to be a function.");

  return array.reduce((newArray, element, index, arr) =>{
        if(callback(element, index, arr)) {
          return newArray.concat(element)
        }
        return newArray;
    }, []);
}

export function everyFnR(array, callback) {

  if (!Array.isArray(array)) throw new Error("First argument should be an array.");
  if(!(typeof callback === 'function')) throw new Error("Second argument needs to be a function.");

  return [...array].reduce((accumulator, currElement, index, arr) => {
    
    if (!callback(currElement, index, arr)) {
      arr.splice(index);
      return false;
    }
    
    return true;
  }, true);
}

export function someFnR(array, callback) {

  if (!Array.isArray(array)) throw new Error("First argument should be an array.");
  if(!(typeof callback === 'function')) throw new Error("Second argument needs to be a function.");

  return [...array].reduce((accumulator, currElement, index, arr) => {
    if (callback(accumulator, index, arr)) {
      arr.splice(index);
      return true;
    } 
    
    return false;
  }, false);
}
