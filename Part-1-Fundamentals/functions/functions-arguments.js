// Function: Arguments

function sum(a, b) {
    console.log(arguments); // Arguments(3) [1, 2, 3]
    return a + b;
}

console.log(sum(1, 2)); // Returns 3
console.log(sum(1)); // Returns NaN - because b is undefined, so a + undefined = NaN
console.log(sum(1, 2, 3, 4, 5)); // Returns 3 - because the function only takes the first two arguments 



// To make the function work with any number of arguments, we can use the arguments object
// The arguments object is an array-like object that stores all the arguments passed to the function
// we can iterate over the arguments object using a for-of loop..

function sum2() {
    //defining a variable total to store the sum of all the arguments
    let total = 0;
    // iterate over the arguments object
    for (let value of arguments)
    // add the value to the total
    total += value;
    // return the total
return total;
}

// Testing the function
console.log(sum2(1, 2, 3, 4, 5, 6)); // Returns 21