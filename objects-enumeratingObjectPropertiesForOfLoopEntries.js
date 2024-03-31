// Objects: Enumerating Object Properties | For-Of to iterate over an object's entries property
// Re-Reviewing how to enumerate object properties using various methods

// Object called circle with a radius property and a draw method
const circle = {
    radius: 1,                      // property
    draw() {                        // method
        console.log('draw');
    }
};

// For-Of Loop
// Previously we used the Object.keys method to get the keys of an object
// Below we are using the Object.entries method to get the keys of an object
for (let entry of Object.entries(circle)) {
    console.log(entry);                               // prints the key-value pairs of the object
}
