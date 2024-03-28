// Primitive Types


let user = 'John'; // String Literal - text wrapped in single or double quotes
let age = 35; // Number Literal / a number without quotes
let isApproved = true; // Boolean Literal - a true or false value
let firstName ; // Undefined - a variable declared but not assigned a value
let lastName = undefined; // Undefined - a variable that has been `explicitly` set to undefined - not often used
let selectedColor = null; // Null - used to clear the value of a variable

// Use the `typeof` operator to determine the type of a variable
console.log(typeof user); // results in 'string'
console.log(typeof age); // results in 'number'
console.log(typeof isApproved); // results in 'boolean'
console.log(typeof firstName); // results in 'undefined'
console.log(typeof lastName); // results in 'undefined'
console.log(typeof selectedColor); // results in 'object'
console.log(''); // line break in the console 

// Concatenation:
// Use the `+` operator to concatenate strings
console.log('User: ' + user);
console.log('Age: ' + age);
console.log('Is Approved: ' + isApproved);
console.log('First Name: ' + firstName);
console.log('Last Name: ' + lastName);
console.log('Selected Color: ' + selectedColor);
console.log(''); // line break in the console 

// Multiple Concatenation:
// Below is an example of concatenating hard-coded strings with the variable values & their types
console.log(typeof user); // results in 'string'
console.log('User ' + user + ' is Type: ' + (typeof user)); // results in 'string'
console.log('Age ' + age + ' is Type: ' + (typeof age)); // results in 'number'
console.log('Is Approved ' + isApproved + ' is Type: ' + (typeof isApproved)); // results in 'boolean'
console.log('First Name ' + firstName + ' is Type: ' + (typeof firstName)); // results in 'undefined'
console.log('Last Name ' + lastName + ' is Type: ' + (typeof lastName)); // results in 'undefined'
console.log('Selected Color ' + selectedColor + ' is Type: ' + (typeof selectedColor)); // results in 'object'
