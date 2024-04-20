// Prototypical Inheritance: Calling the Super Constructor

// if the base object has parameters, they need to be passed in the derived object
// This is done by calling the super constructor from inside the constructor function of the derived object.
// in this case we are using the 'Circle' constructor to call the 'Shape' constructor and defining the 'color' parameter.

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
};

Shape.prototype.draw = function() {
    console.log('draw');
};

function Circle(radius, color) {
    // We need to call the super constructor to initialize the color property
    Shape.call(this, color);
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;


function Square(size) {
    this.size = size;
}
Square.prototype = Object.create(Shape.prototype);

const sh = new Shape();
const c = new Circle(1, 'green');
const s = new Square(1);