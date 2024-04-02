// Arrays: Exercise 6 - Part 2 - Reduce Method 

const numbers = [1, 2, 3, 4, 5, -5];
// const numbers = [];


// Create a function that takes an array of numbers and returns the maximum number.
// Using the reduce method
const max = getMax(numbers);
console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;
    return array.reduce((accumulator, currentValue) => {
        (accumulator < currentValue) ? accumulator = currentValue : accumulator; 
        return accumulator;
    });
}