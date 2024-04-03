// Functions Exercise 3 - Error Handling

try {
// const numbers = [1, 2, 3, 1, 1, 4, 5, 1];
// Used for testing
const numbers = 1;
// console.log(numbers);
// console.log(typeof numbers);
// console.log(Array.isArray(numbers));

const count = countOccurrences2(numbers, 1);

console.log(count);
}

catch(e) {
    console.log(e.message);
}

function countOccurrences2(array, searchElement) {
    if (!Array.isArray(array))
    throw new Error('Value is not an array.');

    return array.reduce((a, b) => {
        const occurrence = (b === searchElement) ? 1 : 0;
        return a + occurrence;
    }, 0);
}
