// Arrays: Exercise 6 - Part 1 - Simple Function 

const numbers = [-1, -2, -3, -4, -5];

// Create a simple function that finds the maximum number in an array.
// Chose to sort the array and return the last element.
const max = getMax(numbers);
console.log(max);

// Further testing with negative numbers proves that sorting the array is not a good idea.
// The sort method has the reverse effect on negative numbers.
function getMax(array) {
    if (array.length === 0) return undefined;
    const max = array
    .sort()
    .slice(array.length -1)
    return (max[0])
}

// Lecture answer:
const max2 = getMax2(numbers);
console.log(max2);

function getMax2(array) {
    if (array.length === 0) return undefined;

    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) 
        max = array[i];
    }
    return max;
}