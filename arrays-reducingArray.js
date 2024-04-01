// Arrays: Reducing an Array

const numbers1 = [1, 2, 3, -1];
const numbers2 = [50, 60, -10, 40];
const numbers3 = [50, 60, -10, 40];

// To sum all the numbers in the array.
let sum1 = 0;
for (let n of numbers1)
    sum1 += n;

console.log(sum1);
console.log('------------BREAK-----------------------------------');


// Using reduce method
// this has two parameters: a callback function and an initial value.
// Note the position of the initial value, it is the second parameter of the reduce method.
const sum2 = numbers2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum2); 
console.log('------------BREAK-----------------------------------');

// With accumulator a and currentValue c, the above operation can be written as:
// a = 0, c = 50 => a = 50
// a = 50, c = 60 => a = 110
// a = 110, c = -10 => a = 100
// a = 100, c = 40 => a = 140


// We can shorten the code even more by removing the 'curly braces' and 'return' keyword.
// as well as the 'initial value' parameter.
const sum3 = numbers3.reduce(
    (accumulator, currentValue) => accumulator + currentValue
    );
    
    console.log(sum3); 
    console.log('------------BREAK-----------------------------------');
    
// With accumulator a and currentValue c, the above operation can be written as:
// a = 50, c = 60 => a = 110
// a = 110, c = -10 => a = 100
// a = 100, c = 40 => a = 140
    