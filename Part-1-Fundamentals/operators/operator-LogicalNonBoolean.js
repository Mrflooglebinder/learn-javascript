// Logical Non Boolean Operator

false || true // true
false || 'Mosh' // Mosh
false || 1 // 1
false || 1 || 2 // 1

//Falsy (false)
// undefined
// null
// 0
// false 
// '' (empty string)
// NaN (Not a Number)

// Anything that is not Falsy -> Truthy

// Short-circuiting
// the below code will return the first truthy value
// meaning it will ignore the rest of the values as soon as it finds the first truthy value
false || 1 || 2 // 1 


// Real world example
let userColor = 'red'; // if this is not set the default color will displayed on the console
let defaultColor = 'blue';

// if userColor is set then it will be displayed on the console
// otherwise the defaultColor will be displayed on the console
// this is the power of using non-boolean logical operators, it allows the use of default values...
let currentColor = userColor || defaultColor;
console.log(currentColor); // red