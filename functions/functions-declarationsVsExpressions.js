// Functions: Declarations vs Expressions

// Function Declaration
// a function declaration is when we declare a function using the function keyword
function walk() {
    console.log('walk');
} // we dont NEED a semicolon here but it is good practice to put it


// Function Expression
// a function expression is when we declare a function as a value of a variable

// Anonymous Function Expression
// an anonymous function expression is when we declare a function without a name
let jog = function() {
    console.log('jog');
}; // we NEED a semicolon here

// calling a function
jog();
let move = jog; // we can assign a function to a variable
move(); // we can call the function using the variable


// Named Function Expression
// a named function expression is when we declare a function with a name
let run = function jog() {
    console.log('run');
}; // we NEED a semicolon here