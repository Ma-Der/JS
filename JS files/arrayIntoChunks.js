export function randomNumber(a, b) {
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

export function aggregateIntoChunks(array) {
  if(!Array.isArray(array)) throw new Error("Argument must be an array.");

  const cpyArr = [...array];

  let newArray = [];
  let size = randomNumber(4, 7);

  while(cpyArr.length > 0) {
    newArray.push(cpyArr.splice(0, size));
    size = randomNumber(4, 7);
  }
  
  if(newArray[newArray.length - 1].length >= 4 && newArray[newArray.length - 1].length <=7) {
    return newArray;
  } else return aggregateIntoChunks(array);
}
