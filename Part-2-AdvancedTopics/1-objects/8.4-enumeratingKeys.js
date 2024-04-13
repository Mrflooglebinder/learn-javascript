// Objects: Enumerating Keys

function Circle(radius) {
    this.radius = radius;
    this.lineType = 'solid';
    this['line Thickness'] = 2;
    this.draw = function() {
        console.log('draw');
    }
    this.draw2 = function() {
        console.log('draw2');
    }
}

const circle = new Circle(10);

// Another approach to get all the keys of an object is to use the Object.keys() method.
// This method returns an array of all the keys of an object.
// With this approach, you can not separate the properties and methods of an object.

const keys = Object.keys(circle); 
console.log(keys);


// To check if a property or method exists in an object, you can use the in operator.
if ('radius' in circle) {
    console.log('Circle has a radius property.');
}