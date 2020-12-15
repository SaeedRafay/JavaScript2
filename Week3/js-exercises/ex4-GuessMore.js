/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

/**

Output #1: from line 18 will be the original value of x that is 9

Reasoning:
If a variable is passed to a function like f1(x), its value is copied for the function to work on.
That is why, the value of original variable remains the same.

Output #2: from line 29 will be object stored in y
where the value of the property x is changed to 10

Reasoning:
Although the function f2(y) could not modify the original object
but the properties and values inside an object can be changed.
That is why, the value of property x is changed by the function f2(y)

*/