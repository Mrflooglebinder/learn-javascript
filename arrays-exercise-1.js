// Arrays: Exercise 1

const numbers = arrayFromRange(-3, 7);

console.log(numbers);

// Create a function called arrayFromRange, it should take to params, min & max

function arrayFromRange(min, max) {
    const arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}
