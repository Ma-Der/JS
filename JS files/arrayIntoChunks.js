export function randomNumber(a, b) {
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
/*
export function aggregateIntoChunks(array) {
  let cpyArray = [...array];
  let newArray = [];
  let randomNum = randomNumber(4, 7);

  while (cpyArray.length > 0) {
    newArray.push(cpyArray.splice(0, randomNum));
    randomNum = randomNumber(4, 7);
  }

  if (newArray[newArray.length - 1].length < 4) {
    let lastChunk = newArray[newArray.length - 1];
    for (let i = 0; i < lastChunk.length; i++) {
      newArray[newArray.length - 2].push(lastChunk[i]);
    }
    newArray.splice(newArray.length - 1);
  }

  for (let i = newArray.length - 1; i >= 0; i--) {
    if (newArray[i].length > 7) {
      let overLength = newArray[i].length - 7;
      let lastArray = newArray[i];
      let beforeLastArray = newArray[i - 1];
      for (let j = 0; j < overLength; j++) {
        beforeLastArray.push(lastArray[j]);
      }
      lastArray.splice(0, overLength);
    }
  }

  return newArray;
}
*/

/*
export function aggregateIntoChunks(array) {

  let cpyArr = [...array];
  let arrays = [];
  let size=1;
  let min = 4;
  let max = 7;
  let sum = 0;
  while(sum <= cpyArr.length) {
    size = Math.min(max, Math.floor((Math.random() * max) + min));
      if(sum <= array.length) {
        arrays.push(Array(size)); 
        sum += size; 
      }
     // if(sum > array.length) {
      //  sum = 0;
     //   arrays.splice(0);
     // }    
  }
    return arrays;
}
*/

export function aggregateIntoChunks(array) {
  if(!Array.isArray(array)) throw new Error("Argument must be an array.");
  const cpyArr = [...array];
  let newArray = [];
  let size = Math.min(7, Math.floor((Math.random() * 7) + 4));
  while(cpyArr.length > 0) {
    newArray.push(cpyArr.splice(0, size));
    size = Math.min(7, Math.floor((Math.random() * 7) + 4));
  }
  if(newArray[newArray.length - 1].length >= 4 && newArray[newArray.length - 1].length <=7) {
    return newArray;
  } else return aggregateIntoChunks(array);
}