export function paginateArray(dataEntries, settings = { paginateArrayIdx, entriesOnPage }) {
  
  if (!Array.isArray(dataEntries)) throw new Error('1st variable must be an array.');
  if(dataEntries.length === 0) throw new Error("Array is empty, nothing to paginate.");
 
  if(Object.prototype.toString.call(settings) !== '[object Object]') throw new Error('Settings parameter must be an object.');
  const { paginateArrayIdx, entriesOnPage } = settings;
 
  if(typeof paginateArrayIdx !== 'number' || typeof entriesOnPage !== 'number'){
    throw new Error('Both settings must be number.');
  }

  if(isNaN(paginateArrayIdx) || isNaN(entriesOnPage)){
    throw new Error("Both settings must be numbers.");
  }
  if (!(paginateArrayIdx > 0 && entriesOnPage > 0)) throw new Error('Both settings variables must be > 0');

  const areAvailableEntriesOnPage = Math.ceil(dataEntries.length / settings.entriesOnPage) >= settings.paginateArrayIdx;
  if (!areAvailableEntriesOnPage) throw new Error('You only can paginate into maximum of ' + Math.ceil(dataEntries.length / settings.entriesOnPage) +
  ' pages.'); 
        
  const indexOfLastPosition = paginateArrayIdx * entriesOnPage;
  const indexOfFirstPosition = indexOfLastPosition - entriesOnPage;
  const entriesOnSelectedPage = dataEntries.slice(indexOfFirstPosition, indexOfLastPosition);

  return entriesOnSelectedPage;      
}
