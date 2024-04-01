// Arrays: Joining Arrays

const numbers = [1, 2, 3];
console.log(numbers);
const joined = numbers.join('|');
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

parts.join('-');
const combined = parts.join('-');
console.log(combined);

// Note: like the above replacing white space with a hyphen, is particularly useful when creating a URL slug from a string.
 