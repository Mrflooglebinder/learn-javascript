// Objects: Value vs Reference Types

// Value Types 
// Value Types are: Number, String, Boolean, Symbol, undefined, null
// When we set y = x, we are copying the value of x into y. They are independent of each other.
// So when we change the value of x, y will not be affected.

// Define x as a number with a value of 10
let x = 10;
console.log('x is: ', x); // 10
console.log('Set y = to x');
// Define y as x (copy the value of x into y)
let y = x;
console.log('y is: ', y); // 10
console.log('Set x = to 20');
x = 20;
console.log('x is: ', x); // 20
console.log('y is still: ', y); // 10

console.log('---BREAK----------------------------------');

// Reference Types
// Reference Types are: Object, Function, Array
// When we set b = a, we are copying the reference of a into b. They are dependent on each other.
// So when we change the value of a, b will be affected. Why... because they are pointing to the same object in memory.

// Define a as an object with a value of 10
let a = { value: 10 };
console.log('a is: ', a); // { value: 10 }
// Define b as a (copy the reference of a into b)
console.log('Set b = to a');
let b = a;
console.log('b is: ', b); // { value: 10 }
// Change the value of a
console.log('Set a.value = 20');
a.value = 20;
console.log('a is: ', a); // { value: 20 }
console.log('b is also: ', b); // { value: 20 }

// Takeaways:
// Primitive types (Value Type) are copied by their value.
// Objects (Reference Type) are copied by their reference.