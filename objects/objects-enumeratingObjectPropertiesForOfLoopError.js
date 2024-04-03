// Objects: Enumerating Object Properties | For-Of Loop - ERROR
// Re-Reviewing how to enumerate object properties using various methods

// Object called circle with a radius property and a draw method
const circle = {
    radius: 1,                      // property
    draw() {                        // method
        console.log('draw');
    }
};

// For-Of Loop
// The for of loop can NOT iterate over objects, it can only iterate over iterables such as arrays and maps.
// Trying to iterate over the circle object with a for of loop will result in an error
for (let key of circle) {
    console.log(key);                       // TypeError: circle is not iterable
}
