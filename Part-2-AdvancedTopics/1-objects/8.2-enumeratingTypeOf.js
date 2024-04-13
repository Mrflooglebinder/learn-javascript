// Objects: Enumerating Type of

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

// We can use the typeof operator to include only the functions from the output.
for (let key in circle) {
    if (typeof circle[key] === 'function')
    console.log(key, circle[key]);
}
console.log('---BREAK--------------------------------------')
