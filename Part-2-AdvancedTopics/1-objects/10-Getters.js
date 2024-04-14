// Objects: Direct Method

// to make the 'defaultLocation' property accessible from outside the object, we can use the direct method, 
// this allows us to read the value of the property. But this is not a good practice as it exposes the private properties to the outside world.
// It can also be used to modify the property value which is not good.

function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 5, y: 10 };

    // Direct method to access defaultLocation
    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    this.draw = function() {
        console.log('draw');
    }
}

// Example usage:
const circle = new Circle(10);
console.log(circle.getDefaultLocation());  // Outputs: { x: 5, y: 10 }
// we have the ability to modify the defaultLocation property value.
circle.getDefaultLocation().x = 10;
console.log(circle.getDefaultLocation());  // Outputs: { x: 10, y: 10 }
