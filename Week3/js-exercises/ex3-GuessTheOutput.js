/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

/**

The output will be alert box with message 12.

Reasoning:
Variable 'a' is declared in the global scope and assigned value 10. 
Constant 'x' is assigned with a call to an anonymous self-invoking 
function which sets the value of 'a' to 12 and returns a non-invoked function. 
x() invokes returned function. Returned function has javascript alert with variable 'a'.

*/