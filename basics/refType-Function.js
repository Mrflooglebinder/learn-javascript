// Functions

// Defining a function called greet that logs 'Hello World' to the console
function greet() {
    console.log('Hello World');
}

// Calling the greet function
greet(); // Hello World

// Defining a function called greetName that logs 'Hello' + the name passed in as an argument to the console
function greetFirstName(fName) {
    // Using string concatenation
    // This is an older technique that is still used but is not as common as template literals
    console.log('Hello ' + fName);
}
greetFirstName('Marty'); // Hello Marty


// Defining a function called greetLastName that logs 'Hello' + the last name passed in as an argument to the console
function greetLastName(lName) {
    // Using template literals
    // This is a newer technique that is more common and is recommended
    // This is more readable and easier to use than string concatenation especially when working with multiple variables or complex expressions.
    // It supports multi-line strings and string interpolation - meaning you can embed expressions in the string & can break the string into multiple lines.
    console.log(`Hello ${lName}`);
}
greetLastName('McFly'); // Hello McFly

function fullGreeting(fName, lName) {
    console.log(`Hello ${fName} ${lName}`);
}
fullGreeting('Marty', 'McFly'); // Hello Marty McFly