export function randomNumber(a, b) {
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

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

  console.log(newArray);

  return newArray;
}
