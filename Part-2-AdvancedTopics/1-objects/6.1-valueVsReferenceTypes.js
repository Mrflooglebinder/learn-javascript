//Objects: Value vs Reference Types - Part 2
// Another Example

// In the below we have a variable let called `number` and we have set it to 10. 
// We have a function called increase that takes a `number` and increases it by 1.
// We call the function and pass the `number` to it & then log the `number` to the console.

// But the result is 10 not 11. Why? 

// Because the `number` is a primitive type (Value Type) and when we pass it to the function,
// it is copied by its value. So the `number` inside the function is a copy of the original `number` and
// when we increase it by 1, it only increases the copy of `number` locally in the function.
// Not the original `number`.

// Define a number with a value of 10
let number = 10;

// Define a function that takes a number and increases it by 1
function increase(number) {
    number++;
}

// Call the function and pass the number
increase(number);

// Log the number
console.log(number); // 10