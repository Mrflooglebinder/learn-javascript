// ES6 Classes: ES6 Classes

// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function () {
//     console.log('draw');
//   };
// }


// Below is a class declaration that acheivs the same thing as the above function declaration
// Note: in ES6, Classes are just syntactic sugar over the existing prototype-based inheritance and they are at their core just functions. 

class Circle {
    // define the constructor function
    constructor(radius) {
        this.radius = radius;

        // This will be added to the object.
        this.move = function() {}
    }

    // Where as this will be added to the prototype of the object.
    draw() {
        console.log('draw');
    }
}

const c = new Circle(1);

// print the type of circle to the console.
// As you can see the type of Circle is a function it is not really a class.
console.log(typeof Circle); // function
console.log(c.constructor); // [Function: Circle]