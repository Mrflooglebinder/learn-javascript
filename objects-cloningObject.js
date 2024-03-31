// Object: Cloning an Object

const circle1 = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const circle2 = {
    radius: 2,
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
const another1 = Object.assign({}, circle1);
console.log(another1);

// You can also add new properties to the object
// This will clone the object and add the color property to the new object
const another2 = Object.assign({
    color: 'yellow'
}, circle2);
console.log(another2);

