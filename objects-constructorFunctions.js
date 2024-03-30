// Constructor Functions

// Factory Function
// Use Camel Notation for factory functions: oneTwoThreeFour
function createCircle(radius) {
    return {
        radius,         
        draw() {        
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
console.log(circle);

// Constructor Functions
// use Pascal Notation for constructor functions: OneTwoThreeFour
function Circle(radius) {
    this.radius = radius;
    this .draw = function() {
        console.log('fake draw function executed');
    }
}

const newCircle = new Circle(1);
console.log(newCircle);
console.log(newCircle.draw());