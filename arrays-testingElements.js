// Arrays: Testing Elements

const numbers = [1, 2, 3, -1];

//every
// Check if all numbers in the array are positive values
const allPositive = numbers.every(value => value >= 0); 
console.log(allPositive); // Output: true

//some
// Check if at least one number in the array is a positive value
const atLeastOnePositive = numbers.some(value => value >= 0); 
console.log(atLeastOnePositive); // Output: true