// Objects: Setters

// to provide the ability to modify the 'defaultLocation' property value, we can use the setter method.

function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 5, y: 10 };

    this.draw = function() {
        console.log('draw');
    }

    // Getter method
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        // Setter method
        set: function(value) {
            // can perform validation before setting the value, 
            // Like the below example where we are checking if the value is an object and has x and y properties.
            if (!value.x || !value.y)
                throw new Error('Invalid location.');

            defaultLocation = value;
        }
    });
}

// Example usage:
const circle = new Circle(10);
console.log(circle.defaultLocation);  // Outputs: { x: 5, y: 10 }

// we can modify the defaultLocation property value.
circle.defaultLocation.x = 10;
// circle.defaultLocation = 15;

console.log(circle.defaultLocation);  // Outputs: { x: 5, y: 10 }