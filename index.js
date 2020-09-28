import { data } from './JS files/data.js';
import { aggregateIntoChunks } from './JS files/arrayIntoChunks.js';
import {
  mapFn,
  filterFn,
  reduceFn,
  reduceRightFn,
  someFn,
  everyFn,
} from '../JS files/arrayMethods.js';
import { filterWith } from './JS files/filterWith.js';
import { findPhraseInArray } from './JS files/findPhraseInArray.js';
import {
  generateArrayOfArrays,
  generateArrayWithRandomNumbers,
} from './JS files/generateArrayWithRandomNumbers.js';
import { generateHuman } from './JS files/generateHuman.js';
import { getMyAge } from './JS files/getMyAge.js';
import { isRectangularTriangle } from './JS files/isRectangularTriangle.js';
import {
  mapFnR,
  filterFnR,
  everyFnR,
  someFnR,
} from './JS files/masterReduce.js';

// start ARRAY-INTO-CHUNKS assignment

const alphabet = 'abcdefghijklmnoprstuwxyz'.split('');
console.log(aggregateIntoChunks(alphabet));

// end ARRAY-INTO-CHUNKS assignment

// start ARRAY-METHODS assignment

const numbers = [1, 2, 4, 5, 3];
const numbers2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(mapFn(alphabet, (el) => el + 'c'));

console.log(filterFn(numbers, (el) => el > 3));

console.log(everyFn(numbers, (el) => el % 2 == 0));

console.log(reduceFn(numbers, (initial, el) => initial + el, 2));

console.log(reduceRightFn(numbers2, (initial, el) => initial.concat(el), []));

console.log(someFn(numbers, (el) => el === 1));

// end ARRAY-METHODS assignment

// start FILTER-WITH assignment

let result = filterWith(data, 484);
console.log(result);

// end FILTER-WITH assignment

// start FIND-PHRASE-IN-ARRAYS assignment

const inputData = 'Koniec astronomicznych wakacji stał się faktem ale to nie koniec atrakcji w naszym pięknym kurorcie'.split(
  ' '
);

findPhraseInArray(inputData, 'as');
// end FIND-PHRASE-IN-ARRAYS assignment

//start GENERATE-ARRAY-WITH-RANDOM-NUMBERS assignment

console.log(generateArrayWithRandomNumbers(15, 5, 20));

console.log(generateArrayOfArrays());

//end GENERATE-ARRAY-WITH-RANDOM-NUMBERS assignment

//start GENERATE-HUMAN assignment

console.log(generateHuman('Oleg', 'Owen'));

//end GENERATE-HUMAN assignment

//start GET-MY-AGE assignment

console.log(getMyAge(new Date(1984, 5, 5)));
console.log(getMyAge(1984));
console.log(getMyAge('1984'));

//end GET-MY-AGE assignment

//start IS-RECTANGULAR-TRIANGLE assignment

console.log(isRectangularTriangle(4, 3, 5));

//end IS-RECTANGULAR-TRIANGLE assignment

//start MASTER-REDUCE assignment

console.log(mapFnR([5, 2, 1], (x) => x + x));

console.log(filterFnR([1, 2, 3, 4], (x) => x > 2));

console.log(everyFnR([1, 2, 3, 4], (x) => x == 2));
console.log(someFnR([2, 3, 1], (x) => typeof x == 'string'));

//end MASTER-REDUCE assignment
