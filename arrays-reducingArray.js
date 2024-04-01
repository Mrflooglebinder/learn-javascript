// Arrays: Reducing an Array

const numbers1 = [1, 2, 3, -1];
const numbers2 = [50, 60, -10, 40];

// To sum all the numbers in the array.
let sum1 = 0;
for (let n of numbers1)
    sum1 += n;

console.log(sum1);

// Using the reduce method. Newer way to do the same shit with more typing...
const sum2 = numbers2.reduce(
    (accumulator, currentValue) => accumulator + currentValue
    );
    
console.log(sum2); 
