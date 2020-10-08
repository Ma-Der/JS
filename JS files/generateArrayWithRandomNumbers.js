export function generateArrayWithRandomNumbers(
  howManyNumbers = 10,
  min = 1,
  max = 10
) {
  if (
    typeof howManyNumbers === 'number' &&
    typeof min === 'number' &&
    typeof max === 'number' &&
    !isNaN(howManyNumbers) &&
    !isNaN(min) &&
    !isNaN(max)
  ) {
    const newArray = new Array(howManyNumbers).fill(null).map((el) => {
      return (el = Math.floor(Math.random() * (max - min + 1) + min));
    });
    return newArray;
  } else throw new Error('All variables must be numbers');
}

export function generateArrayOfArrays(
  howManyArrays = 10,
  howManyNumbers = 10,
  min = 1,
  max = 10
) {
  if (
    typeof howManyNumbers === 'number' &&
    typeof min === 'number' &&
    typeof max === 'number' &&
    typeof howManyArrays === 'number' &&
    !isNaN(howManyNumbers) &&
    !isNaN(min) &&
    !isNaN(max) &&
    !isNaN(howManyArrays)
  ) {
    const newArray = new Array(howManyArrays)
      .fill(null)
      .map(
        (el) => (el = generateArrayWithRandomNumbers(howManyNumbers, min, max))
      );
    return newArray;
  } else throw new Error('All variables must be numbers.');
}
