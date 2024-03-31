// Object: Cloning an Object - Using the Spread Operator

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};


// // DONT USE THIS - it is outdated - the current way to clone an object is to use the Object.assign method (which we will see next)
// // this method is iterating over the object and copying each property to the new object
// const another = {};
// for (let key in circle)
//     another[key] = circle[key];


// The assign method
// This method is used to clone an object
const another1 = Object.assign({}, circle);
console.log(another1);

// You can also add new properties to the object
// This will clone the object and add the color property to the new object
const another2 = Object.assign({
    color: 'yellow'
}, circle);
console.log(another2);


// The spread operator
// This is the most modern way to clone an object
const another3 = { ...circle };
console.log(another3);

const another33 = { ...circle, opacity: 0.5 };
    console.log(another33);

const merged = { ...another2, ...another33 };
console.log(merged);

// The Takeaways
// 1. Use the Object.assign method to clone an object or multiple objects or add new properties to the new object
// 2. Use the spread operator to clone, update, merge, add new properties, manipulate properties of an object