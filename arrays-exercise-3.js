// Arrays: Exercise 3
// Create a function that takes two arrays as arguments. 
// The first array will be an array of numbers.
// The second array will contain numbers to exclude from the first array.

const numbers = [1, 2, 3, 4];

const output = except(numbers, [3, 4]);

console.log(output);

function except(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}
