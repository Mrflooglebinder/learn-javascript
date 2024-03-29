// Control Flow Exercise 3

// FizzBuzz
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

const output = fizzBuzz(31);
console.log(output);

function fizzBuzz(input) {
    if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';
    else if (input % 3 !== 0 && input % 5 !== 0) return input;
    else if (input % 3 === 0 && input % 5 !== 0) return 'Fizz';
    else if (input % 3 !== 0 && input % 5 === 0) return 'Buzz';
    else if (isNaN(input)) return 'Not a number';
    else return 'error';
}

for (let i = 0; i < 100; i++) {
    console.log(fizzBuzz(i));
}
