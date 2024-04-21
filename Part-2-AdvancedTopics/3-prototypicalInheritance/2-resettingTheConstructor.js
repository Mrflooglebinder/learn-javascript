// Prototypical Inheritance: Resetting the Constructor


function Shape() {

}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
};

Shape.prototype.draw = function() {
    console.log('draw');
};

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

// Reset the constructor
Circle.prototype.constructor = Circle;


function Square(size) {
    this.size = size;
}
Square.prototype = Object.create(Shape.prototype);

// Reset the constructor
Square.prototype.constructor = Square;

const sh = new Shape();
const c = new Circle(1);
const s = new Square(1);