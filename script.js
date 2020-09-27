import { aggregateIntoChunks } from './JS files/arrayIntoChunks.js';
import {
  mapFn,
  filterFn,
  reduceFn,
  reduceRightFn,
  someFn,
  everyFn,
} from './JS files/arrayMethods.js';
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
const newArray = aggregateIntoChunks(alphabet);
document.getElementById('chunks').innerHTML = JSON.stringify(newArray);

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
const data = [
  {
    _id: '5e985a07feddae7617ac44f6',
    age: 24,
    eyeColor: 'brown',
    name: 'Cummings Baxter',
    gender: 'male',
    company: 'VELOS',
    email: 'cummingsbaxter@velos.com',
    phone: '+1 (907) 482-2451',
    tags: ['labore', 'elit', 'excepteur', 'nisi', 'mollit', 'anim', 'aliquip'],
    friends: [
      {
        id: 0,
        name: 'Sheppard Jensen',
      },
    ],
  },
  {
    _id: '5e985a0709dfa1e6fd93c6ad',
    age: 32,
    eyeColor: 'brown',
    name: 'Madelyn Dickson',
    gender: 'female',
    company: 'KENGEN',
    email: 'madelyndickson@kengen.com',
    phone: '+1 (984) 521-2439',
    tags: ['nisi', 'veniam', 'dolore', 'officia', 'ex', 'non', 'pariatur'],
    friends: [
      {
        id: 0,
        name: 'Bruce Barton',
      },
      {
        id: 1,
        name: 'Juliet Schmidt',
      },
      {
        id: 2,
        name: 'Horton Haley',
      },
      {
        id: 3,
        name: 'Herminia Witt',
      },
    ],
  },
  {
    _id: '5e985a0737e2306e9aef6ecd',
    age: 26,
    eyeColor: 'blue',
    name: 'Mcguire Mercado',
    gender: 'male',
    company: 'LINGOAGE',
    email: 'mcguiremercado@lingoage.com',
    phone: '+1 (963) 450-2194',
    tags: ['cupidatat', 'occaecat', 'amet', 'qui', 'elit', 'esse', 'deserunt'],
    friends: [
      {
        id: 0,
        name: 'Loraine Harper',
      },
      {
        id: 1,
        name: 'Luann Randall',
      },
      {
        id: 2,
        name: 'Obrien Rich',
      },
      {
        id: 3,
        name: 'Noble Wilkerson',
      },
    ],
  },
  {
    _id: '5e985a07148cfba58c860ec2',
    age: 26,
    eyeColor: 'brown',
    name: 'Marina Porter',
    gender: 'female',
    company: 'GORGANIC',
    email: 'marinaporter@gorganic.com',
    phone: '+1 (867) 417-3497',
    tags: [
      'laborum',
      'aliquip',
      'sit',
      'adipisicing',
      'aute',
      'cupidatat',
      'aliquip',
    ],
    friends: [
      {
        id: 0,
        name: 'Blair Hill',
      },
      {
        id: 1,
        name: 'Ebony Jimenez',
      },
    ],
  },
  {
    _id: '5e985a074984f9f08ccaaa4c',
    age: 25,
    eyeColor: 'green',
    name: 'Barlow Ferguson',
    gender: 'male',
    company: 'TOYLETRY',
    email: 'barlowferguson@toyletry.com',
    phone: '+1 (837) 484-2231',
    tags: ['est', 'dolor', 'minim', 'ut', 'anim', 'culpa', 'non'],
    friends: [
      {
        id: 0,
        name: 'Delacruz Acevedo',
      },
      {
        id: 1,
        name: 'Gloria Tanner',
      },
      {
        id: 2,
        name: 'Cantrell Myers',
      },
      {
        id: 3,
        name: 'Fisher Leonard',
      },
    ],
  },
];

let result = filterWith(data, 963);
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

console.log(filterFnR([1, 2, 3, 4], (x) => x > 5));

console.log(everyFnR([1, 2, 3, 4], (x) => x > 1));
console.log(someFnR([2, 3, 1], (x) => typeof x == 'string'));

//end MASTER-REDUCE assignment
