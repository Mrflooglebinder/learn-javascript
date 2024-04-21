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
    constructor(radius) {
        this.radius = radius;
        this.move = function() {}
    }

    draw() {
        console.log('draw');
    }
}

const c = new Circle(1);