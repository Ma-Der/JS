export function isRectangularTriangle(x1, x2, x3) {

  const sides = [x1, x2, x3];
  
  const sortedSides = sides.sort((a, b) => a-b);
  const [a, b, c] = sortedSides;
  const sidesMultiply = a * b * c;

  if (typeof sidesMultiply !== 'number') throw new Error('All variables must be a number.');
  if (isNaN(sidesMultiply)) throw new Error('One of the variables is not a number.');
  if (!(sidesMultiply > 0)) throw new Error('All variables must be greater than zero.'); 
  if (a + b <= c) throw new Error("You can't build triangle with these sides.");
  if (!(c > a && c > b)) throw new Error("You can't make a rectangular triangle with these lengths: " + sortedSides);        
  
  const isPitagoras = Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
  return isPitagoras;       
}
