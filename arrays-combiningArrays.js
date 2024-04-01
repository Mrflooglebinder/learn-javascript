// Arrays: Combining Arrays

const first = [1, 2, 3];
const second = [4, 5, 6];
console.log(first);
console.log(second);

// Combine the two arrays
const combined = first.concat(second);
console.log(combined);

// Using slice, we can get a portion of the array
const sliceElementToValue = combined.slice(3, 5)
console.log(sliceElementToValue);

//reset combined
console.log(combined);
// Using slice, we can get a portion of the array - from the first parameter to the end of the array
// We simply exclude the second parameter
const sliceElementToLast = combined.slice(3)
console.log(sliceElementToLast);

//reset combined
console.log(combined);
const sliceAllElements = combined.slice()
console.log(sliceAllElements);
console.log('---BREAK----------------');

// Example when using concat or slice methods with arrays of reference values
const third = [{ id: 1}];
console.log(third);

const combined2 = first.concat(third);
third[0].id = 10;
console.log(third);
console.log(combined2);


//Take Aways:
// when using concat or slice methods with arrays of primitive values, the values are copied to the new array
// when using concat or slice methods with arrays of reference values, the references are copied to the new array 
