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
import { paginateArray } from './JS files/paginateArray.js';

// start ARRAY-INTO-CHUNKS assignment

const alphabet = 'abcdefghijklmnoprstuwxyz'.split('');
console.log(aggregateIntoChunks(alphabet));

// end ARRAY-INTO-CHUNKS assignment

// start ARRAY-METHODS assignment

const numbers = [1, 2, 3, 4, 5, 34, 2];
const numbers2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(mapFn(alphabet, (el) => el + 'c'));

console.log(filterFn(numbers, (el) => el > 3));

console.log(everyFn(numbers, (el) => el % 2 == 0));

console.log(reduceFn(numbers, (a, b) => a + b, 3));

console.log(reduceRightFn(numbers2, (a, b) => a.concat(b), []));

console.log(someFn(numbers, (el) => el === 1));

// end ARRAY-METHODS assignment

// start FILTER-WITH assignment

let result = filterWith(data, 'jensen');
console.log(result);

// end FILTER-WITH assignment

// start FIND-PHRASE-IN-ARRAYS assignment

const inputData = 'Koniec astronomicznych wakacji stał się faktem ale to nie koniec atrakcji w naszym pięknym kurorcie'.split(
  ' '
);

console.log(findPhraseInArray(inputData, 'kon'));
// end FIND-PHRASE-IN-ARRAYS assignment

//start GENERATE-ARRAY-WITH-RANDOM-NUMBERS assignment

console.log(generateArrayWithRandomNumbers(15, 5, 20));

console.log(generateArrayOfArrays(3, 5, 4, 70));

//end GENERATE-ARRAY-WITH-RANDOM-NUMBERS assignment

//start GENERATE-HUMAN assignment

console.log(generateHuman('Oleg', 'Owen'));

//end GENERATE-HUMAN assignment

//start GET-MY-AGE assignment

console.log(getMyAge(new Date(2020, 4, 3)));
console.log(getMyAge(1901));
console.log(getMyAge('1870'));

//end GET-MY-AGE assignment

//start IS-RECTANGULAR-TRIANGLE assignment

console.log(isRectangularTriangle(3, 5, 4));

//end IS-RECTANGULAR-TRIANGLE assignment

//start MASTER-REDUCE assignment

console.log(mapFnR([5, 2, 1], (x) => x + x));

console.log(filterFnR([1, 2, 3, 4], (x) => x < 4));

console.log(everyFnR([1, 2, 3, 4], (x) => x > 0));
console.log(someFnR([2, 3, 1], (x) => typeof x == 'string'));

//end MASTER-REDUCE assignment

// start PAGINATE-ARRAY assignment

const dataPagination = 'Lorem Ipsum has been the industrys standard dummy text ever since the There are many variations of passages of Lorem Ipsum available All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary It uses a dictionary of over 200 Latin words'.split(
  ' '
);

const settings = { paginateArrayIdx: 1, entriesOnPage: 4 };
console.log(paginateArray(dataPagination, settings));

// end PAGINATE-ARRAY assignment
