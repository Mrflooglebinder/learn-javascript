// Prototypical Inheritance: Creating your Own Prototypical Inheritance

// In the below example, we have a Circle object that has a radius property.
// We have also created a draw method and a duplicate method as prototypes of the Circle object.

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function() {
  console.log('draw');
};

Circle.prototype.duplicate = function() {
  console.log('duplicate');
};


// Dupliate code:
// But further to the above, we have also created a Square object that has a size property.
// It also has a draw method and a duplicate method as prototypes of the Square object.

// This duplication of code can be refactored by creating a Shape object that has a draw method and a duplicate method, 
// Both Circle & Square objects will inherit from the Shape object - we will do this next... 

function Square(size) {
  this.size = size;
}

Square.prototype.draw = function() {
  console.log('draw');
};

Square.prototype.duplicate = function() {
  console.log('duplicate');
};

const circle = new Circle(1);
const square = new Square(1);
console.log(circle.draw(1));
console.log(square.draw(10));