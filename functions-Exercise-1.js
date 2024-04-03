// Function Exercise - Create a func called sum that up either (multiple arguments of numbers) 
// or (an array of numbers) and return the sum of all of the numbers.

//Part 1
// It should take a varying number of arguments and return their sum.
// sum(1, 2, 3, 4) // 10

// Part 2
// then as a challenge change it to accept an array of numbers instead of arguments.
// sum([1, 2, 3, 4]) // 10

// Part 3
// Combine both to accept either an array or a varying number of arguments.


const otherArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 55


// Part 1 Sum of arguments
function sumArgs(...args) {
    return args.reduce((a, b) => a + b);
} 
console.log(sumArgs(1, 2, 3, 4)); // 10


// Part 2 Sum of array
function sumArr(array) {
    return array.reduce((a, b) => a + b);
}
console.log(sumArr(otherArray)); // 55


// Part 3 Combine both Part 1 and Part 2 & determine if the argument is an array or not
function sumCombi(...args) {
    if (args.length === 1 && Array.isArray(args[0])) {
        return sumArr(args[0]);
    } else {
        return sumArgs(...args);
    }
}
console.log(sumCombi(1, 2, 3, 4, 10)); // 20
console.log(sumCombi(otherArray)); // 55


// Part 3.5 refactored Part 3
function sumCombi2(...args) {
     return (args.length === 1 && Array.isArray(args[0])) ? sumArr(args[0]) : sumArgs(...args);
}

console.log(sumCombi2(otherArray)); // 55
console.log(sumCombi2(1, 2, 3,)); // 6
