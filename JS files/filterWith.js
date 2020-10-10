export function filterWith(arr, filter) {
  if (!Array.isArray(arr)) throw new Error('First argument must be an array.');
  if (!(filter.toString().length > 2)) return [];
  return arr.filter(function search(element) {
    return Object.keys(element).some((key) => {
      if (typeof element[key] === 'string') {
        if (
          element[key].toLowerCase().includes(filter.toString().toLowerCase())
        ) {
          return element[key];
        }
      }
      if (typeof element[key] === 'number') {
        if (element[key].toString().includes(filter.toString().toLowerCase())) {
          return element[key];
        }
      }
      if (Array.isArray(element[key])) {
        return Object.keys(element[key]).some((secKey) => {
          if (Array.isArray(element[secKey])) {
            return filterWith(element[secKey], filter);
          }
          if (typeof element[key] === 'object') {
            return search(element[key]);
          }
        });
      }
      if (typeof element[key] === 'object') {
        return search(element[key]);
      }
    });
  });
}
