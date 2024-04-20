// Prototypical Inheritance: Intermediate Function Inheritance

// Th

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
};

Shape.prototype.draw = function() {
    console.log('draw');
};

// This function sets up inheritance, allowing the Child to reuse the Parent's methods without duplicating code.
// It defines Child's prototype as an object that inherits from Parent's prototype.
// This setup means that instances of Child will inherit behaviors from Parent.
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}
// This is less noisy because we have to repeat the same code for every object.
extend(Circle, Shape);

function Square(size) {
    this.size = size;
}
// This is less noisy because we have to repeat the same code for every object.
extend(Square, Shape);

const sh = new Shape();
const c = new Circle(1, 'green');
const s = new Square(1);