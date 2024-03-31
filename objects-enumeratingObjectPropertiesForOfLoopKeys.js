// Objects: Enumerating Object Properties | For-Of to iterate over an object's keys property
// Re-Reviewing how to enumerate object properties using various methods

// Object called circle with a radius property and a draw method
const circle = {
    radius: 1,                      // property
    draw() {                        // method
        console.log('draw');
    }
};

// For-Of Loop
// To iterate over an object's properties, we can't use the for of loop unless we convert the object to an array.
// To do this we use the Object.keys method which returns an array of keys in the object.
// Then we can use the for of loop to iterate over the array of keys.
for (let key of Object.keys(circle)) {
    console.log(key);                               // prints the key of the object (the property or method name's)
    console.log(key.valueOf(), circle[key]);        // prints the key and the value of the key
}
