// Functions: Let vs Var - Part 2


var color = 'red'; 
let age = 30;

// the let variable, while it is defined in the global scope, it is not attached to the window object.
// It will be available only within the file in which it is defined.

// The var variable has been declared globally, so it is available anywhere.
// It attaches itself to the window object, this can be affected not only by your code but also by other libraries.
// Such as third party libraries that you might be using the same variable name.
// in the console, you can type:
// window.color and it will return 'red' - this proves that the var variable is attached to the window object.


// Similarly, this function is also attached to the window object - This too should be avoided.
// later in the course we will discuss how using modules can help us avoid this issue.

function sayHi() { 
    console.log('hi');
    console.log(age);
}

sayHi();