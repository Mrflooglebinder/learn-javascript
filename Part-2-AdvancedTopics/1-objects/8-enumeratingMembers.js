// Objects: Enumerating Members

function Circle(radius) {
    this.radius = radius;
    this.lineType = 'solid';
    this['line Thickness'] = 2;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

// To enumerate the members in an object, we use a for-in loop.
for (let key in circle) {
    console.log(key);
}