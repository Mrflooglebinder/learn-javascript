// Objects: Constructors Properties - Call Method

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
};

// The `call` method:
// The `call` method allows us to call a function that is defined on another object.
// Circle.call()

// When we call the Circle.call function, we need to pass it an empty object as the first argument. like so...
// Circle.call({});
// This will create a new object and set the `this` keyword to reference that object.
// The `call` method will then call the Circle function with the new object as the value of `this`.
// After that we can add our arguments to the Circle.call function. Like so...
// Circle.call({}, 1);
// Or we can add multiple arguments like so...
// Circle.call({}, 1, 2, 3);

// This expression `Circle.call({}, 1);`
// Is exactly the same as const another = `new Circle(1);`

// Where these mean create a new object...
// Circle.call(`{}`, 1);
// const another = `new` Circle(1);

// of this object...
// `Circle`.call({}, 1);
// const another = new `Circle`(1);

// and we set the argument as this...
// Circle.call({}, `1`);
// const another = new Circle(`1`);

// So the `call` method is a way to call a function that is defined on another object.
// and the `this` keyword will reference the object that we pass to the `call` method.
// Circle.call({}, 1);
// const another = new Circle(1);


// The `apply` method:
// The `apply` method is similar to the `call` method, but it takes an array of arguments.
// So it is useful when we have an array of arguments that we want to pass to the function.

// Take Away:
// In javascript functions are objects.

Circle.call({}, 1);

console.log();
const another = new Circle(1);