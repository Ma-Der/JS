export function paginateArray(dataEntries, settings = { paginateArrayIdx, entriesOnPage }) {
  
  const keysArray = Object.keys(settings); 
  const { paginateArrayIdx, entriesOnPage } = settings;
  const areAvailableEntriesOnPage = Math.ceil(dataEntries.length / settings.entriesOnPage) >= settings.paginateArrayIdx;

    if (!Array.isArray(dataEntries)) throw new Error('1st variable must be an array.');
    if(!(typeof settings === 'object')) throw new Error('Settings parameter must be an object.');
    if(!(settings.hasOwnProperty('paginateArrayIdx'))) throw new Error('There is no paginateArrayIdx key in settings object.');
    if(!(settings.hasOwnProperty('entriesOnPage'))) throw new Error('There is no entriesOnPage key in settings object.');
    if(!(keysArray[0] === 'paginateArrayIdx')) throw new Error('First key in settings should be paginateArrayIdx.');
    if(!(keysArray[1] === 'entriesOnPage')) throw new Error('Second key in settings should be entriesOnPage.');
    if(keysArray.length > 2) throw new Error("There's too much parameters in settings object.");
    if (typeof settings.paginateArrayIdx != 'number' && typeof settings.entriesOnPage != 'number') throw new Error('Both settings must be number.');
    if (!(settings.paginateArrayIdx > 0 && settings.entriesOnPage > 0)) throw new Error('Both settings variables must be > 0');
    if (!areAvailableEntriesOnPage) throw new Error('You only can paginate into maximum of ' + Math.ceil(dataEntries.length / settings.entriesOnPage) +
      ' pages.');
          
    const indexOfLastPosition = paginateArrayIdx * entriesOnPage;
    const indexOfFirstPosition = indexOfLastPosition - entriesOnPage;
    const entriesOnSelectedPage = dataEntries.slice(indexOfFirstPosition, indexOfLastPosition);

    return entriesOnSelectedPage;
          
}
