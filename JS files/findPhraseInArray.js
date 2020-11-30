export function findPhraseInArray(array, phrase) {
  if (!Array.isArray(array)) throw new Error("First argument must be an array."); 
  if (array.length === 0) throw new Error("Can't find nothing, please tell me what I'm looking for.");
  
  if(!(typeof phrase === 'string')) throw new Error("Second argument must be a string.");
  if(!(phrase.length > 2)) throw new Error("Phrase must be more than 2 letters.");

  const found = array.reduce((acc, currentValue, index) => {
    if (currentValue.toLowerCase().includes(phrase.toLowerCase())) {
      acc.push([[`Value:`, currentValue], [` index: `, index]]);
    }
    return acc;
  }, []);
  
  if (found.length == 0) throw new Error('Nothing found.');
  return found;
}