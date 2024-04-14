// Prototype Inheritance - Prototypical Multi-level Inheritance

// Base constructor for Shape
function Shape() {
    this.type = 'shape';
}

// Add a method to the Shape prototype
Shape.prototype.draw = function() {
    console.log('Drawing a ' + this.type);
};

// Constructor for Circle, inheriting from Shape
function Circle(radius) {
    Shape.call(this);  // Call the Shape constructor
    this.radius = radius;
    this.type = 'circle';
}

// Set Circle's prototype to an instance of Shape
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// Add a method to the Circle prototype
Circle.prototype.calculateArea = function() {
    return Math.PI * this.radius * this.radius;
};

// Constructor for ColoredCircle, inheriting from Circle
function ColoredCircle(radius, color) {
    Circle.call(this, radius);  // Call the Circle constructor
    this.color = color;
}

// Set ColoredCircle's prototype to an instance of Circle
ColoredCircle.prototype = Object.create(Circle.prototype);
ColoredCircle.prototype.constructor = ColoredCircle;

// Add a method to the ColoredCircle prototype
ColoredCircle.prototype.display = function() {
    console.log('A ' + this.color + ' ' + this.type + ' with an area of ' + this.calculateArea());
};

// Example usage
const coloredCircle = new ColoredCircle(10, 'red');
coloredCircle.draw();          // Outputs: Drawing a circle
coloredCircle.display();       // Outputs: A red circle with an area of 314.1592653589793

// Checking the instance and prototype relationships
console.log(coloredCircle instanceof ColoredCircle);  // true
console.log(coloredCircle instanceof Circle);         // true
console.log(coloredCircle instanceof Shape);          // true
