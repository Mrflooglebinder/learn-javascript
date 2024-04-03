// Functions Exercise 2 - Area of a Circle

// Create a circle object using the obj literal syntax. 
// The object should have: A radius property that we can read or write to.
// it should have an area property which is read only.

const circle = {
        radius: 1,
        get area() { 
            return Math.PI * this.radius * this.radius;
        }
}

console.log(circle.radius);
console.log(circle.area);
console.log('Attempting to change the radius property to 5');
circle.radius = 5;
console.log(circle.radius);
console.log(circle.area);
console.log('Attempting to change the area property to 100 - READ ONLY');
circle.area = 100; // This will not work because area is a read only property
console.log(circle.radius);
console.log(circle.area);

