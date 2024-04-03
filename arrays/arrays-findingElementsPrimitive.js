// Arrays: Finding Elements Primitive Type

const numbers = [1, 2, 3, 1, 4];

// Find the first occurrence of the value being searched, returns the index of the element else returns -1 if not found
console.log(numbers.indexOf(1)); 
// Find the first occurrence of the value being searche... 
// Starting from the index position specified in the 2nd argument.. 
console.log(numbers.indexOf(1, 2)); 

// find the last occurrence of the value being searched, returns the index of the element else returns -1 if not found
console.log(numbers.lastIndexOf(1)); // 3

// check if the element exists in the array returns true if found else false
console.log(numbers.indexOf(1) !== -1); //  - OLD METHOD
console.log(numbers.includes(1)); // - NEW METHOD


