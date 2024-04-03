// Arrays: Exercise 5 Part 2
// To see the accumulator in action uncomment line 14...

const numbers = [1, 2, 3, 1, 1, 4, 5];
// console.log(numbers);

const count = countOccurrences2(numbers, 1);

console.log(count);

function countOccurrences2(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        // console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0);

}
