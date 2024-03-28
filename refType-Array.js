// Arrays

// Array is a data structure that we use to represent a list of items.
// in JavaScript, an array is actually an object.

// Define an array of 4 colors
let selectedColors = ['red', 'blue', 'green', 'yellow'];

// Print the array and its elements to the console
console.log(selectedColors); // [ 'red', 'blue', 'green', 'yellow' ]

// Print individual elements of the array to the console as follows:
console.log(selectedColors[0]); // red
console.log(selectedColors[1]); // blue
console.log(selectedColors[2]); // green
console.log(selectedColors[3]); // yellow

// Print the length of the array to the console (count of elements in the array)
console.log(selectedColors.length); // 4

// Add a new color to the array
selectedColors[4] = 'black';

// Print the new array element to the console
console.log(selectedColors[4]); // black

// re-print the length of the array including the new element
console.log(selectedColors.length); // 5
