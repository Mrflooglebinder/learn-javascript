// Iterating Prototype & Instance Members

function Circle(radius) {
    // Instace members
    this.radius = radius;

    this.move = function() {
        console.log('move');
    }
}

// Prototype members
Circle.prototype.draw = function() {
    console.log('draw');
}

const c1 = new Circle(1);

// Instance Members Only
// The below will only output the instance members of the Circle object constructor function.
// It won't output the prototype members.
console.log(Object.keys(c1)); // Output: [ 'radius', 'move' ]


// Instance Members & Prototype Members
// To iterate over all the members (instance and prototype) of the Circle object constructor function, we can use the for-in loop.
// Like so:
for (let key in c1) {
    console.log(key); // Output: radius, move
}

// This will output the following on the console.
// radius
// move
// draw 

// Note: in some JS documentation, 'instance' is sometimes referred to as 'own' members.
// We can see this in the below example.
console.log(c1.hasOwnProperty('radius')); // output is true 
console.log(c1.hasOwnProperty('draw'));  // output is false
