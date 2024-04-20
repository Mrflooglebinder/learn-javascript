// Prototypical Inheritance: Creating your Own Prototypical Inheritance

// This is how we can create our own prototypical inheritance in JavaScript.

// Shape will inherit from Object
function Shape() {

}

// We define the methods (that can be reused by any type of shape) in the prototype object of the Shape object.
// Remember when we define a method as a prototype method, it is not added to the object itself, but to the prototype object of the object.
// This allows us to reuse the method for any object that inherits from the Shape object without having to redefine the method for each object. 
Shape.prototype.duplicate = function() {
    console.log('duplicate');
};

Shape.prototype.draw = function() {
    console.log('draw');
};

// Circle will initially inherit from Object
function Circle(radius) {
    this.radius = radius;
}

// Circle object will now inherit from the Shape object
Circle.prototype = Object.create(Shape.prototype);


// Square will initially inherit from Object
function Square(size) {
    this.size = size;
}
// Square object will now inherit from the Shape object
Square.prototype = Object.create(Shape.prototype); // Square object will inherit from the Shape object

const sh = new Shape(); //inherits from Object
const c = new Circle(1); //inherits from Circle - but Circle inherits from Shape - and Shape inherits from Object
const s = new Square(1); //inherits from Square - but Square inherits from Shape - and Shape inherits from Object