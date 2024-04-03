// Arrays: Removing Elements

const numbers = [1, 2, 3, 4];
console.log(numbers);

// Remove the last element
const last = numbers.pop();

console.log(numbers);
console.log(last);

// Remove the first element
const first = numbers.shift();
console.log(numbers);
console.log(first);

// replace elements to demonstrate the Splice method next
numbers.push(4, 5);
numbers.unshift(1);
console.log(numbers);

// Remove elements from the middle
// The first argument is the starting index, the second argument is the number of elements to remove
numbers.splice(2, 2);
console.log(numbers);





