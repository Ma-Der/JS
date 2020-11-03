export function getMyAge(input) {
  if(!input) throw new Error("Argument is missing.");

  let parsedValue = null;
  let actualYear = new Date().getFullYear();

  switch(true) {
    case (typeof input === 'number'):
      if(isNaN(input)) throw new Error("Input should be a number."); 
      parsedValue = input;
      break;

    case (typeof input === 'string'):
      if(!(input.length > 0)) throw new Error("Empty string.");
      parsedValue = parseFloat(input).toFixed(0);
      break;

    case (input instanceof Date): 
      if(isNaN(input.getTime())) throw new Error("Invalid date.");
      parsedValue = input.getFullYear();
      break;
  }
  
  if(parsedValue < 1900) throw new Error("You are probably dead.");
  if(parsedValue > actualYear) throw new Error("You are not born yet.");
  
  
  return actualYear - parsedValue;
}
