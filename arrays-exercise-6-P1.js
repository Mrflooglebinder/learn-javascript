// Arrays: Exercise 6 - Part 1 - Simple Function 

const numbers = [1, 2, 3, 4, 5, -5];


// Create a simple function that finds the maximum number in an array.
// Chose to sort the array and return the last element.
const max = getMax(numbers);
console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;
    const max = array
    .sort()
    .slice(array.length -1)
    return (max[0])
}
