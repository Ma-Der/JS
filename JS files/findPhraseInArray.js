export function findPhraseInArray(array, phrase) {
  if (Array.isArray(array) && typeof phrase === 'string') {
    const search = array.reduce((acc, currentValue, index) => {
      if (currentValue.toLowerCase().includes(phrase)) {
        acc.push('Value: ' + currentValue + ' index: ' + index);
      }
      return acc;
    }, []);
    if (search.length == 0) {
      return 'No such phrase.';
    } else return search;
  } else
    throw new Error(
      'First parameter must be an array, second needs to be string.'
    );
}
