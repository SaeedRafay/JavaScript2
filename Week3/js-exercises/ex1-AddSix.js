/**
 
 ** Exercise 1: Add Six **
 
Declare a function called `createBase`.The function takes a number as a parameter and
return a closure, that adds a number to the base number argument.

Call the function three times. The return values should be:
 15, 24, 33

 */

function createBase(baseNumber) {
  // Put here your logic...
  const multiplyNine = 9;
  let multiplier = 1;
  return function() {
    console.log(baseNumber + multiplyNine * multiplier++);
  }
}

const addSix = createBase(6);

// Put here your function calls...
addSix();
addSix();
addSix();