export function findPhraseInArray(array, phrase) {
  let phrases = array.filter((value) => {
    if (value.toLowerCase().includes(phrase)) {
      return value;
    }
  });
  let indexArr = [];
  array.map((value, i) => {
    if (value.toLowerCase().includes(phrase)) {
      if (i != null) {
        indexArr.push(i);
      }
    }
  });

  let result = [phrases, indexArr].reduce((a, b) =>
    a.map((val, i) => 'Phrase: ' + val + ', index: ' + b[i])
  );

  if (phrases && indexArr == '') {
    console.log('No such phrase.');
  } else console.log(result);
}
