// Objects: Enumerating Object Properties | For-In Loop
// Re-Reviewing how to enumerate object properties using various methods

// Object called circle with a radius property and a draw method
const circle = {
    radius: 1,                      // property
    draw() {                        // method
        console.log('draw');
    }
};

// For-In Loop
// using the for in loop we can iterate over all the properties & methods of an object
for (let key in circle) {
    console.log(key);                       // prints the key of the object (the property or method name's)
    console.log(key, circle[key]);          // prints the key and the value of the object (the property or method name's and their values)
}
