// Arrays: Iterating Arrays

const numbers = [1, 2, 3];

for (let number of numbers)
console.log(number);
console.log('---');

// the forEach method is an alternative to the for-of loop
numbers.forEach(function(number) {
    console.log(number);
});
console.log('---');

// and can be written as an arrow function
numbers.forEach(number => console.log(number));
console.log('---');

// The callback function can optionally take two parameters: the current element and the index
numbers.forEach((number, index) => console.log(index, number));
console.log('---');

