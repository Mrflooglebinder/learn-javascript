// For Of Loop

const colors = ['red', 'green', 'blue'];

// for-of loop
// Recommended for arrays!
// This is designed to loop through arrays and strings, it is more efficient & accurate than using a for-in loop (which is designed for objects)
// While in JS, arrays are technically objects, the for-of loop is specifically designed to loop through arrays.
for (let color of colors){
    console.log(color);
}


// Not recommended for arrays! 
// for-in loop 
// While it works, it can be slow and it can return properties that are not part of the array.
for (let index in colors) 
console.log(index, colors[index]);