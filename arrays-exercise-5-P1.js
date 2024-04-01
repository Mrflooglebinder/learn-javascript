// Arrays: Exercise 5 Part 1

const numbers = [1, 2, 3, 4, 1, 1];
// console.log(numbers);

const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement) {
    let count = 0;
        for (let i = 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            count += array[i];
        }
    } 
    return count;
}
