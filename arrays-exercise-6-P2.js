// Arrays: Exercise 6 - Part 2 - Reduce Method 

const numbers = [1, 2, 3, 4, 5, -5];
// const numbers = [];
// const numbers = [-1, -2, -3, -4, -5];


// Create a function that takes an array of numbers and returns the maximum number.
// Using the reduce method
const max = getMax(numbers);
console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;
    return array.reduce((accumulator, currentValue) => 
        (accumulator > currentValue) ? accumulator : currentValue)
}


// This is the lecturer's solution
// this is way less wordy - nice & clean...
const max2 = getMax2(numbers);
console.log(max2);

function getMax2(array) {
    if (array.length === 0) return undefined;
    
    return array.reduce((a, b) => (a > b) ? a : b);
}