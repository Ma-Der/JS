export function getMyAge(input) {
  let actualYear = new Date().getFullYear();
  if (typeof input === 'object') {
    return actualYear - input.getFullYear();
  } else if (typeof input === 'number') {
    return actualYear - input;
  } else if (typeof input === 'string') {
    return actualYear - parseInt(input);
  }
}
