// Objects: Adding and Removing Properties

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

// Dot Notation
// this is cleaner and easier than the bracket notation.
circle.location = { x: 1 };
console.log(circle);

// Bracker Notation
// this is more verbose than dot notation. However, in certain situations, bracket notation is more useful. Such as...
// When you want to dynamically access a property.
circle['location'] = { x: 2 };

// For example:

const propertyName = 'location';
circle[propertyName] = { x: 25 };

// Another use case for bracket notation is when you are using property names that are not valid identifiers.

// Valid identifier
const lineThickness = 'lineThickness';
circle.lineThickness = { px: 2 }; 

// Invalid identifiers
// this is not a valid identifier because it has a hyphen in it.
const propertyName3 = 'location-3';
// this is not a valid identifier because it has a space in it.
const propertyName3v1 = 'location 3v1';
//circle.location 3v1 does not work and will not show up in the intelisense while trying to access it via dot notation..

const lineType = 'line Type';
circle[lineType] = { lineType: 'dotted' };



