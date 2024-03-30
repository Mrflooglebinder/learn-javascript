// Objects: Factory Functions

// Factory Function
function createCircle(radius) {
    return {
        radius,         
        draw() {        
            console.log('draw');
        }
    };
}

// Create Circle Objects
// Can continue to create more circle objects from the same factory function
// note: the draw method is not duplicated for each object -  it is referenced from the factory function 
// So if in future we need to change the functionality of draw method, we can do it in one place. 
const circle1 = createCircle(1);
console.log(circle1);

// reusing the factory function to create another circle object
const circle2 = createCircle(2);
console.log(circle2);