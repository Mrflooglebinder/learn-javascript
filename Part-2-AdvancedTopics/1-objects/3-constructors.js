// Objects: Constructors

// Factory Function
// Note, if a function returns an object, it is referred to as a Factory Function.
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
const circle = createCircle(1);


// Constructor Function
// Note, a function is referred to as a `Constructor Function` if we use the `this` keyword and we use the `new` operator when calling the function. 
// Create a constructor function by first defining a function using Pascal Notation (capital letter at the beginning of each word)
function Circle(radius) {
    // use the 'this' keyword to reference the object this object. 
    this.radius = radius;
    // use the 'this' keyword to define a method on the object.
    this.draw = function() {
        console.log('draw');
    }
};

// To create an object from a constructor function, first define it with a name for the object, 
// Then, use the 'new' operator to create a `new object` from the object defined by the constructor function.
// dont forget the Pascal Notation for the constructor function.
const another = new Circle(1);

console.log(another);


// Notes on the `new` operator:
// First the `new` operator creates an empty object.
// Then it will set the `this` keyword to reference the object.
// Finally, it will return the object from the constructor function.

// Note that in Constructor functions, we don't need to explicitly return the object.
// This will occur automatically when we use the `new` operator.