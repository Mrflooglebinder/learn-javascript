// Objects - Built-in Math Object
// in JavaScript, the Math object is a built-in object that has properties and methods for mathematical constants and functions. 
// a great resource to learn more about the Math object is the MDN web docs 
// found here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math 


// examples of the Math object

// random method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// This will return a random number between 0 and 1
const numFlipper = Math.random();
console.log(numFlipper);


// Get a random number between two values

const min = 1;
const max = 10;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
console.log(getRandomArbitrary(min, max));

// Rounding a number
const decimalNumber = 13.14159;
const numRounder = Math.round(decimalNumber);
console.log(numRounder);

// Max and Min
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const minNum = Math.min(...numArray);
const maxNum = Math.max(...numArray);
console.log(minNum);
console.log(maxNum);

