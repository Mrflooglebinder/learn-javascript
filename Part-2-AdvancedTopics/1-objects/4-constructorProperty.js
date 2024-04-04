// Objects: Constructors Properties

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
const circle = createCircle(1);


// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
};

const another = new Circle(1);

// When inspecting the constructor property of the object, it will return the function that was used to create the object.

// The constructor property of the object 'another' will return f Circle(radius) { this.radius = radius; this.draw = function() { console.log('draw'); } }
// because the object 'another' was created using the Constructor Function 'Circle'.
console.log(another.constructor);

// The constructor property of the object 'circle' will return f Object() { [native code] }
// because the object 'circle' was created using the built in Constructor Function in JavaScript.
console.log(circle.constructor);


// The constructor property of the object 'x' will return f Object() { [native code] }
// because the object 'x' was created using the built in Constructor Function in JavaScript.
let x = {};
console.log(x.constructor);
