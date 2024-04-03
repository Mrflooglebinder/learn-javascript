// Control Flow Exercise 3

// FizzBuzz
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

const output = fizzBuzz('31');
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number') return NaN; // Changed to type of 'input' & Moved to the top, if it is not a number then there is no point checking the rest...
    if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';
    if (input % 3 === 0 && input % 5 !== 0) return 'Fizz';
    if (input % 3 !== 0 && input % 5 === 0) return 'Buzz';
    //if (input % 3 !== 0 && input % 5 !== 0) return input; --> // Refactored this line to the following line as it is cleaner 
    return input; // Refactored
}

for (let i = 0; i < 100; i++) {
    console.log(fizzBuzz(i));
}
