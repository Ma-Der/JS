function isValidDate(date) {
  return (
    date &&
    Object.prototype.toString.call(date) === '[object Date]' &&
    !isNaN(date.getTime())
  );
}
export function getMyAge(input) {
  let actualYear = new Date().getFullYear();
  if (typeof input === 'number') {
    return actualYear - input;
  }
  if (typeof input === 'string') {
    return actualYear - parseInt(input);
  }
  if (isValidDate(input)) {
    return actualYear - input.getFullYear();
  } else throw new Error('Invalid date');
}
