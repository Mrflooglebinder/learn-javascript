// Objects: Getters & Setters

// to make the 'defaultLocation' property accessible from outside the object, we can use the getter method, this allows us to read the value of the property.
// When we it as a function, it provides closure which allows us to access the variables defined in the parent function.
// Meaning we can access the 'defaultLocation' variable from the parrent function and make it read-only accessible from outside the object.

function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 5, y: 10 };

    this.draw = function() {
        console.log('draw');
    }

    // Getter to make defaultLocation accessible as a property
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        }
    });
}

// Example usage:
const circle = new Circle(10);
console.log(circle.defaultLocation);  // Outputs: { x: 5, y: 10 }

// we cannot modify the defaultLocation property value.
// circle.getDefaultLocation().x = 10;  // TypeError: circle.getDefaultLocation is not a function

console.log(circle.defaultLocation);  // Outputs: { x: 5, y: 10 }