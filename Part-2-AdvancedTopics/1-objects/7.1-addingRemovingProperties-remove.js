// Objects: Adding and Removing Properties | Removing Properties

// We can also delete properties from an object using the delete operator.
// a usecase could be that we are returning an object to the user, but the object also contains some sensitive information...
// Such as a credit card number or a token. 
//  We can remove these properties before returning the object to the user.

function Circle(radius) {
    this.radius = radius;
    this.lineType = 'solid';
    this['line Thickness'] = 2;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

console.log(circle);
// Returns
// Circle {radius: 10, lineType: 'solid', lineThickness: 2, location: {…}, draw: ƒ}
// draw: ƒ ()
// lineThickness: 2
// lineType: "solid"
// radius: 10
// [[Prototype]]: Object


const circle2 = new Circle(10);

// Delete using dot notation
delete circle2.lineType;
//delete using bracket notation
delete circle2['line Thickness'];

console.log(circle2);
// Returns the same as above but without the lineType and lineThickness properties
// Circle {radius: 10, draw: ƒ}
// draw: ƒ ()
// radius: 10
// [[Prototype]]: Object

