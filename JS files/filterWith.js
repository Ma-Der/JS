export function filterWith(arr, filter) {
  let filtr = filter.toString().toLowerCase();
  const result = arr.filter(function search(element) {
    return Object.keys(element).some((key) => {
      if (typeof element[key] === 'string') {
        if (element[key].toLowerCase().includes(filtr)) {
          return Object.values(element);
        }
      } else if (typeof element[key] === 'number') {
        if (element[key].toString().includes(filtr)) {
          return Object.values(element);
        }
      } else if (element[key] && typeof element[key] === 'object') {
        return search(element[key]);
      }
    });
  });
  return result;
}
