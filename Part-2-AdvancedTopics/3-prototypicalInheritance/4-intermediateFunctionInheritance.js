// Prototypical Inheritance: Intermediate Function Inheritance



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
    Shape.call(this, color);
    this.radius = radius;
}

// This is noisy because we have to repeat the same code for every object.
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;


function Square(size) {
    this.size = size;
}

// This is noisy because we have to repeat the same code for every object.
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

const sh = new Shape();
const c = new Circle(1, 'green');
const s = new Square(1);