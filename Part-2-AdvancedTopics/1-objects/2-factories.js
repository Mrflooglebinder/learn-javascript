// Objects: Factories

// Duplicating Object literals is ok, as long as they are simple objects, that don't have any methods.
// So, creating objects with object literal syntax is an issue, ONLY if that object has a behavior. Defined in a method.

// Solution: is to use a Factory or a Constructor Function. (seen furhter below)

// Object Literal - 1
const circle1 = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
};

// Object Literal - 2
const circle2 = {
    radius: 2,
    location: {
        x: 2,
        y: 2
    },
};

console.log('--------------------------------------------------');

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle3 = createCircle(1);
circle3.draw();



