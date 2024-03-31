// Objects: Value vs Reference Types: Continued...

// Takeaway: 
// Primitives are copied by their value
// Reference Types are copied by their reference

// Primitives are copied by their value
// Set numPrimative as a primitive value type of 10
let numPrimative = 10;
// Log the local variable value to the console
console.log(numPrimative);

// Create a function called increase that takes an argument value and increments it by 1 and logs the value to the console
// Note: the variable numPrimative in this function, once it is in this function, it is a local variable
// Remember: local variables are only accessible within the function, so th incremented value will only be available within the function...
function increaseP(numPrimative) {
    numPrimative++;
    // Log the local variable value to the console
    console.log(numPrimative);
}

increaseP(numPrimative);
// Log the global variable value to the console
console.log(numPrimative);

console.log('-----------------BREAK----------------------------');

// Objects are copied by their reference
// Set numObject as an object with a value property of 10
// Note: this is an object, so it is a reference type & can be accessed globally.
// Remember: Reference types values, are just a reference to a value stored in the heap memory, so they can be referenced from anywhere.
// including from within functions.

// Set numObject as an object with a value property of 10
let numObject = { value: 10 };
// Log the object to the console - Results in: { value: 11 }
console.log(numObject);

// Create a function called increase that takes an argument value and increments it by 1 and logs the value to the console
function increaseR(numObject) {
    // Increment the value property of the object by 1
    numObject.value++;
    // Log the object to the console - Results in: { value: 11 }
    console.log(numObject);
    // Log the value property of the object to the console - Results in: 'undefined'
    // Results in: 'undefined' because the value property is not a local variable and is not accessible within the function.
    console.log(numObject.value);
}

increaseR(numObject);
console.log(numObject);
console.log(numObject.value);