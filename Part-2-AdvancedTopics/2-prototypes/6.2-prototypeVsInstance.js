// Prototype Vs Instance - Accessing Instance Members from Prototype Methods

// We can access instance members from prototype methods.
// Like the below example: we are accessing the move method from the draw method.

function Circle(radius) {
    // Instace members
    this.radius = radius;

    this.move = function() {
        console.log('move');
    }
}

// Prototype members
Circle.prototype.draw = function() {
    this.move();
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(1);

// The below will output the following on the console.
// move
// draw
c1.draw();
