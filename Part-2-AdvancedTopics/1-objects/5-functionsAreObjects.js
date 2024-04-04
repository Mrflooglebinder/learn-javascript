// Objects: Functions Are Objects

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
};

// if tou start typing `Circle.` you will see that the function Circle has properties like `length`, `name`, `arguments`, 
// `caller`, `prototype` and `__proto__`.
// The Purple icons are the methods and the blue icons are the properties.
// refer to the image located ./images/1-obj.5-functionsAreObjects.png


const another = new Circle(1);

console.log('Circle.name: ', Circle.name); // Circle
console.log('Circle.length: ', Circle.length); // Returns the number of arguments
console.log('Circle.constructor: ', Circle.constructor); // Returns 'who created the object' ƒ Function() { [native code] }

const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
`);

const circle = new Circle1(1);

console.log('another: ', another);
console.log('circle: ', circle);

