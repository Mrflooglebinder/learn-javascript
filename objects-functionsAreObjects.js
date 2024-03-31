// Objects: Functions are Objects

// not sure how to capture this lesson in a single file, so I will just move on to the next lesson

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const Circle1 = new Function('radius', `this.radius = radius;
this.draw = function() {
    console.log('draw');
}
`
);

const circle = new Circle1(1);

const another = new Circle(1);