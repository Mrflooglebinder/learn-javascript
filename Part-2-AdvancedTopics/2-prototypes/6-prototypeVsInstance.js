// Prototype Vs Instance

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const c1 = new Circle(1);
const c2 = new Circle(1);


// This is a Constructor Function that contains Instance Members ONLY.

// CAUTION: 
// Defining a method inside a constructor function is not a good practice!
// Each object created from this constructor function will have its OWN copy of the method.
// This is not efficient, especially when we have many objects and or if the method(s) do something complex.
// Put simply it is a waste of memory.
// CAUTION: 


// When viewing in Chrome DevTools: under Memory tab, we can see that the draw method is stored twice in memory.
// Below is a redacted version of the output:

// Circle×2
//     Circle@2354215
//         __proto__::Object@2354219
//         draw::()@2354217
//     Circle@2354223
//         __proto__::Object@2354219
//         draw::()@2354225


// To fix this and make it more memory efficient, we use Prototype Members which we will cover next...