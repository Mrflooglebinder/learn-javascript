// Object: Cloning an Object

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};


// DONT USE THIS - it is outdated - the current way to clone an object is to use the Object.assign method (which we will see next)
// this method is iterating over the object and copying each property to the new object
const another = {};

for (let key in circle)
    another[key] = circle[key];

console.log(another);