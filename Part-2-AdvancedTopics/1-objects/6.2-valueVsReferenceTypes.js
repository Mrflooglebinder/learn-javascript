//Objects: Value vs Reference Types - Part 2
// Another Example

// In the below we have a object called `obj` and we have set it to 10. 
// We have a function called increase that takes an `obj` and increases its .value by 1.
// We call the function and pass the `obj` to it & then log the `obj` to the console.

// The result is 11 not 10. Why? 

// Because the `obj` is a reference type and when we pass it to the function,
// it is copying a reference to the original obj in memory. So the `obj` inside the function is not a copy of the original `obj`.
// Both the original `obj` and the `obj` inside the function are pointing to the same object in memory.
// So, when we increase it by 1, it increases the actual original value of obj where it is/was originally defined/stored.

// Define a number with a value of 10
let obj = { value: 10 };

// Define a function that takes a number and increases it by 1
function increase(obj) {
    obj.value++;
}

// Call the function and pass the number
increase(obj);

// Log the number
console.log(obj); // 10