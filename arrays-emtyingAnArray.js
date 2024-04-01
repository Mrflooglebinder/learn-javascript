// Arrays: Emptying an Array

// Solution 1
let numbers1 = [1, 2, 3, 4];
let another1 = numbers1;
console.log(numbers1);
console.log(another1);


// Solution 1 - Only works if the array is declared with let
// But. if the array is being referenced by another variable, the original array will not be emptied...Ref to 'another'
numbers1 = [];
console.log(numbers1);
console.log(another1);
console.log('--Solution 1-BREAK-------------------');


// PREFERED SOLUTION!
// Solution 2 - Works on const arrays as well as arrays that are being referenced by another variable
const numbers2 = [1, 2, 3, 4];
const another2 = numbers2;
console.log(numbers2);
console.log(another2);

// Solution 2 
// Setting the length of the array to 0 will truncate the array in memory which will also affect the array that is referencing it
numbers2.length = 0;
console.log(numbers2);
console.log(another2);
console.log('--Solution 2-BREAK-------------------');

// Solution 3

const numbers3 = [1, 2, 3, 4];
const another3 = numbers3;
console.log(numbers3);
console.log(another3);

numbers3.splice(0, numbers3.length);
console.log(numbers3);
console.log(another3);
console.log('--Solution 3-BREAK-------------------');


// Solution 4
const numbers4 = [1, 2, 3, 4];
const another4 = numbers4;
console.log(numbers4);
console.log(another4);

while (numbers4.length > 0)
    numbers4.pop();
console.log(numbers4);
console.log(another4);
console.log('--Solution 4-BREAK-------------------');
