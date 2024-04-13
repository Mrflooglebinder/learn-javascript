// Objects: Enumerating Properties

function Circle(radius) {
    this.radius = radius;
    this.lineType = 'solid';
    this['line Thickness'] = 2;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

// To get the values of the properties we can use the bracket notation.
for (let key in circle) {
    console.log(key, circle[key]);
}