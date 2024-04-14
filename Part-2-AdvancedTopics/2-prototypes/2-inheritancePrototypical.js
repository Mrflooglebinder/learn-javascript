// Prototypes: Inheritance Prototypical

// Base constructor for Shape
function Shape(color) {
    this.color = color;
}

// Method added to the Shape prototype
Shape.prototype.draw = function() {
    console.log('Drawing a shape');
};

// Constructor for Circle that inherits from Shape
function Circle(radius, color) {
    // Call the parent constructor with the context of "this"
    Shape.call(this, color);
    this.radius = radius;
}

// Setting Circle's prototype to an instance of Shape to inherit methods
Circle.prototype = Object.create(Shape.prototype);

// Ensure the constructor property points back to Circle
Circle.prototype.constructor = Circle;

// Method specific to Circle
Circle.prototype.calculateArea = function() {
    return Math.PI * this.radius * this.radius;
};

// Example usage
let circle = new Circle(10, 'red');
console.log(circle.color);          // Outputs: red
circle.draw();                      // Outputs: Drawing a shape
console.log(circle.calculateArea());  // Outputs: The area of the circle

// Checking the instance and prototype relationships
console.log(circle instanceof Circle);  // true
console.log(circle instanceof Shape);   // true
