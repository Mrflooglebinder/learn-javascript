// Prototype Vs Instance - Accessing Prototype Methods from Instance Members 

// We can access Prototype Methods from instance members.
// In the below example: we are accessing the draw method (in the prototype) from the move method (in the instance) of the Circle object constructor function. 

function Circle(radius) {
    // Instace members
    this.radius = radius;

    this.move = function() {
        this.draw();
        console.log('move');
    }
}

// Prototype members
Circle.prototype.draw = function() {
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(1);

// The below will output the following on the console.
// draw
c1.draw();

// The below will output the following on the console.
// draw
// move
c2.move();