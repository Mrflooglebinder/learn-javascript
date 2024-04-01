// Arrays: Exercise 5 Part 2

const numbers = [1, 2, 3, 4, 1, 1];
// console.log(numbers);

const count = countOccurrences2(numbers, 1);

console.log(count);

function countOccurrences2(array, searchElement) {
    const occurrences = [];
        for (let i = 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            occurrences.push(array[i]);
        }
    }
    const count = occurrences.reduce(
        (accumulator, currentValue) => accumulator + currentValue
        );
        
    return count; 
}
