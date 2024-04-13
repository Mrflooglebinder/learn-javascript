// Objects: Abstraction

function Circle(radius) {
    this.radius = radius;
    // To implement abstraction, we can use local variables and local functions. via the 'let' keyword.
    // Setting a local variable to store the default location creates closure.
    // Closure is a function that has access to its outer function's scope even after the outer function has finished executing.
    let defaultLocation = { x: 0, y: 0 };
    // Setting a local function to compute the optimum location.
    let computeOptimumLocation = function(factor) {
        console.log('Processing the optimum location...');
    }
    this.lineType = 'solid';
    this['line Thickness'] = 2;
    this.draw = function() {
        // To use the local function, we can call it here. Note we call the function without the 'this' keyword.
        console.log('draw');
        computeOptimumLocation(0.1);
    }
}

const circle = new Circle(10);

// Using closure, this will not be accessible here.
// circle.computeOptimumLocation();

circle.draw();

//If you type 'circle.' to see the available properties and methods,
// you will not see the 'defaultLocation' and 'computeOptimumLocation' properties.
// This is because they are local variables and functions and are not accessible from outside the object.