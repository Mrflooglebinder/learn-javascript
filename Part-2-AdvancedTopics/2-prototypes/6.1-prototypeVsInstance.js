// Prototype Vs Instance

function Circle(radius) {
    // Instace members
    this.radius = radius;
}

// Prototype members
Circle.prototype.draw = function() {
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(1);

// The constructor function now only contains the Instance Member (radius).
// We have moved the draw method to the prototype object.
// This way, all instances of the Circle object can share the same draw method.
// This is much more memory efficient, especially when we have many objects or if the method does something complex.


// When viewing in Chrome DevTools: under Memory tab, we can see that the draw method is only stored once in memory.
// Below is a redacted version of the output:

// Circle×2	
// Circle@26100256.1-prototypeVsInstance.js:3
//     map::system / Map@2610029
//     __proto__::Object@2610027
//         constructor::Circle()@2610033
//         draw::()@2610035
        
// Circle@26100316.1-prototypeVsInstance.js:3
//     map::system / Map@2610029
//     __proto__::Object@2610027
//         constructor::Circle()@2610033
//         draw::()@2610035
        
        