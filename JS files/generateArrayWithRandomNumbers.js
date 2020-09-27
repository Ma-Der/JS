export function generateArrayWithRandomNumbers(
  howManyNumbers = 10,
  min = 1,
  max = 10
) {
  const arr = [];
  for (let i = 0; i < howManyNumbers; i++) {
    arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return arr;
}

export function generateArrayOfArrays(
  howManyArrays = 10,
  howManyNumbers = 10,
  min = 1,
  max = 10
) {
  const arr = [];
  for (let i = 0; i < howManyArrays; i++) {
    arr[i] = [].concat(
      generateArrayWithRandomNumbers(howManyNumbers, min, max)
    );
  }
  return arr;
}
