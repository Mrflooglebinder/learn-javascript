// Objects: Constructor Property

// The below are the constructor functions built into JavaScript
// But we typically use the object literal syntax to create objects - refer to comments to the right of each line
new String();   // '', "", ``
new Boolean();  // true, false
new Number();   // 1, 2, 3, ...

// The takeaways from the above are;
// Every object has a constructor property and that references the function that was used to create that object

// Factory Function
function createCircle(radius) {
    return {
        radius,         
        draw() {        
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
// run circle.constructor in console to see the constructor property
// it will return the below;

// circle.constructor
// ƒ Object() { [native code] }


// Constructor Functions
function Circle(radius) {
    this.radius = radius;
    this .draw = function() {
        console.log('fake draw function executed');
    }
}

const newCircle = new Circle(1);
// run newCircle.constructor in console to see the constructor property
// it will return the below;

// newCircle.constructor
// ƒ Circle(radius) {
//     this.radius = radius;
//     this .draw = function() {
//         console.log('fake draw function executed');
//     }
// }


