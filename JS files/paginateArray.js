export function paginateArray(
  dataEntries,
  settings = { paginateArrayIdx, entriesOnPage }
) {
  if (Array.isArray(dataEntries)) {
    if (
      typeof settings.paginateArrayIdx != 'number' &&
      typeof settings.entriesOnPage != 'number'
    ) {
      throw new Error('Both settings must be number.');
    } else {
      if (settings.paginateArrayIdx > 0 && settings.entriesOnPage > 0) {
        if (
          Math.ceil(dataEntries.length / settings.entriesOnPage) >=
          settings.paginateArrayIdx
        ) {
          let entriesOnSelectedPage = [];
          const settingsValues = Object.values(settings);
          const indexOfLastPosition = settingsValues[0] * settingsValues[1];
          const indexOfFirstPosition = indexOfLastPosition - settingsValues[1];
          entriesOnSelectedPage = dataEntries.slice(
            indexOfFirstPosition,
            indexOfLastPosition
          );

          return entriesOnSelectedPage;
        } else
          throw new Error(
            'You only can paginate into maximum of ' +
              Math.ceil(dataEntries.length / settings.entriesOnPage) +
              ' pages.'
          );
      } else throw new Error('Both settings variables must be > 0');
    }
  } else throw new Error('1st variable must be an array.');
}
