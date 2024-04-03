// Arrays: Filtering Array

const numbers = [1, 2, 3, -1];

const filtered1 = numbers.filter(function(value) {
  return value >= 0;
});

// converting the above into an arrow function:
const filtered2 = numbers.filter(value => value >= 0);

// for an even shorter we can change 'value' to a single letter... like: 
// 'v' (to represent value) or...
// 'n' (to represent number) because it is obvious that we are working with numbers in this case.
// So the below filter is filtering/getting number where number is greater than or equal to 0.
const filtered3 = numbers.filter(n => n >= 0);

console.log(filtered1);
console.log(filtered2); 
console.log(filtered3);


