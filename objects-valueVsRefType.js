// Objects: Value vs Reference Types

// Takeaway: 
// Primitives are copied by their value
// Reference Types are copied by their reference

// Primitives are copied by their value
// Primitives are: Number, String, Boolean, Symbol, Undefined, Null
// x & y are independent of each other & their values are stored in different memory locations
console.log('Set x = 10');
let x = 10;
console.log('x is: ', x); // 10
console.log('set y = x');
let y = x;
console.log('y is: ', y); // 10
console.log('Now set x = 20');
x = 20;
console.log('x is: ', x); // 20
console.log('y is: ', y); // 10
console.log('---------------------------------');

// Reference Types are copied by their reference
// Reference Types are: Objects, Functions, Arrays
// xx & yy are not independent of each as they are pointing to the same memory location of the object
console.log('Set xx as an object = { value: 10 }');
let xx = { value: 10 };
console.log('xx is: ', xx); // { value: 10 }
console.log('xx is: ', xx.value); // { value: 10 }
console.log('set yy = the objext xx');
let yy = xx;
console.log('yy is: ', yy); // { value: 10 }
console.log('yy is: ', yy.value); // { value: 10 }
console.log('Now set xx.value = 20');
xx.value = 20;
console.log('xx is: ', xx); // { value: 20 }
console.log('yy is: ', yy); // { value: 20 }
console.log('xx is: ', xx.value); // { value: 20 }
console.log('yy is: ', yy.value); // { value: 20 }