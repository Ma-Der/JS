export function findPhraseInArray(array, phrase) {
  
  if (!phrase) throw new Error("Can't find nothing, please tell me what I'm looking for.");
  if (!Array.isArray(array)) throw new Error("First argument must be an array.");
  if(!(typeof phrase === 'string')) throw new Error("Second argument must be a string.");
    
  const search = array.reduce((acc, currentValue, index) => {
    if (currentValue.toLowerCase().includes(phrase)) {
      acc.push('Value: ' + currentValue + ' index: ' + index);
    }
    return acc;
  }, []);
  if (search.length == 0) throw new Error('No such phrase.');
  return search;
}
