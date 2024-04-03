// Functions Declarations are Hoisted
// Hoisting is a JavaScript mechanism funtion declarations are hoisted to the top of the file at runtime.

// call the walk function before it is declared
walk(); // this will still work because functions declarations are hoisted to the top of the file at runtime.

// Function Declaration
function walk() {
    console.log('walk');
}

walk(); // we can also call the function before it is declared!


// uncomment the next line to see the error in the console
// run(); // this will not work because function expressions are NOT hoisted

// Function Expression
// where as function expressions are not hoisted - they cannot be called before they are declared
const run = function() {
    console.log('run');
};

run(); // this will work