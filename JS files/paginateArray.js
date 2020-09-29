export function paginateArray(dataEntries, settings={paginateArrayIdx, entriesOnPage}) {
  let entriesOnSelectedPage = [];
  const settingsValues = Object.values(settings);
  const indexOfLastPosition = settingsValues[0] * settingsValues[1];
  const indexOfFirstPosition = indexOfLastPosition - settingsValues[1];
  entriesOnSelectedPage = dataEntries.slice(indexOfFirstPosition, indexOfLastPosition);
  
  return entriesOnSelectedPage;
}
