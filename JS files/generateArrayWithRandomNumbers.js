export function generateArrayWithRandomNumbers(howManyNumbers = 10, min = 1, max = 10) {

  const argumentsMultiply = howManyNumbers * min * max;
  if (!(typeof argumentsMultiply === 'number')) throw new Error("All arguments must be numbers.");
  if (isNaN(argumentsMultiply)) throw new Error("All arguments must be numbers.");

  if(!(howManyNumbers > 0)) throw new Error("1st parameter must be more than zero.");
  if(!(min < max)) {
    let temp = null;
    temp = max;
    max = min;
    min = temp;
  }

    const newArray = new Array(howManyNumbers).fill(null).map((el) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    });
    return newArray;
}

export function generateArrayOfArrays(howManyArrays = 10, howManyNumbers = 10, min = 1, max = 10) {
  
  if (!(typeof howManyArrays === 'number')) throw new Error("All arguments must be numbers");
  if(isNaN(howManyArrays)) throw new Error('All arguments must be numbers.');
  if(!(howManyArrays > 0)) throw new Error("1st parameter must be more than zero.");
   
  const newArray = new Array(howManyArrays).fill(null).map((el) => generateArrayWithRandomNumbers(howManyNumbers, min, max));
  return newArray;
}
