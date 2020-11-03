export function filterWith(arr, filter) {
  
  if(!Array.isArray(arr)) throw new Error('First argument must be an array.');
  if (!(filter.toString().length > 2)) return [];
    
  function search(element) {
    if (typeof element === 'string') {
     if (element.toLowerCase().includes(filter.toString().toLowerCase())) {
        return (element);
      }
    }
    if (typeof element === 'number') {
         if (element.toString().includes(filter.toString().toLowerCase())) {
          return (element);
        }
      }
    if (element instanceof Array) {
      return Object.keys(element).some((key) => {
        if(element[key] instanceof Array) {
           return filterWith(element[key], filter);
        }
        if(element[key] instanceof Object) {
          return search(element[key]);
        }
         
      });    
    }
    if (element instanceof Object) {
      return Object.keys(element).some((key) => search(element[key]));
    }
  }
  return arr.filter(search);
}