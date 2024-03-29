// Write a func that takes two numbers and returns the max of the two.

let number = max(4, 4);
// console.log(number);

// this function checks if a is greater than b, if it is it returns a, if not it returns b
// but this is not a clean implementation of the code -  and is a bit verbose
function max(a, b) {
  if (a > b) return a;
  else return b;
}
console.log(number);

// this is a cleaner implementation of the above code - we dont need the else statement
function max(a, b) {
  if (a > b) return a;
  return b;
}
console.log(number);

// this is a cleaner implementation of the above code - we dont need the if statement
// we can use the ternary operator
function max(a, b) {
  return (a > b) ? a : b;
}
console.log(number);
