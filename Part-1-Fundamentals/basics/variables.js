// JavaScript is a dynamic language, so you don't have to specify the type of a variable. 
// You can use the `let` keyword to declare a variable. 
// The value of a variable can change throughout the program, and JavaScript takes care of the data type for you.

// The syntax to declare a variable is:
// let variableName = value;

// The variableName:
// Should be a meaningful name that describes the data it holds.
// Are case-sensitive, so `user` and `User` are two different variables.
// Cannot start with a number.
// Cannot contain spaces or hyphens (-).
// Connot be a reserved keyword, such as `let`, `if`, `else`, `for`, etc.

// Example 1
// Create a variable called `name` and initialize it with a string value.
let user = 'John';

// Print the value of the variable `name` to the console, to do this we use the `console.log()` function and pass the variable `name` as an argument to the function.

console.log(user); // The result will be `John` printed to the console.

//Example 2
// Create a variable called `age` and initialize it with a number value & then print it to the console.
let interestRate = 0.3;
console.log(interestRate);

// We can change the value of a variable by simply assigning a new value to it & then print it to the console.
interestRate = 1.3;
console.log(interestRate);
