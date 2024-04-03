// Objects: Enumerating Object Properties | Using the in operator
// Re-Reviewing how to enumerate object properties using various methods

// Object called circle with a radius property and a draw method
const circle = {
    radius: 1,                      // property
    draw() {                        // method
        console.log('draw');
    }
};

// The in operator
// The in operator is used to check if a property exists in an object
// real world example might be to check if a property exists in an object before using it so that you don't get an error

// prints yes if the property exists in the object
if ('radius' in circle) console.log('Yes');

// prints Yes if the property exists in the object - else doesnt print anything in the console
if ('color' in circle) console.log('Yes');

// prints No if the property does not exist in the object - else doesnt print anything in the console 
if (!('color' in circle)) console.log('No');