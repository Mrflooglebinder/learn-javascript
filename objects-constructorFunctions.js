// Constructor Functions

// Constructor Functions
// use Pascal Notation for constructor functions: OneTwoThreeFour
// 'this' refers to the object that is executing the function
function Circle(radius) {
    this.radius = radius;
    this .draw = function() {
        console.log('fake draw function executed');
    }
}

const newCircle = new Circle(1);

console.log(newCircle);
console.log(newCircle.draw());