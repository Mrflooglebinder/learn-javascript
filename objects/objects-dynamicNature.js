// Objects: Dynamic Nature

const circle = {
    radius: 1
};
console.log(circle);

// in JS objects are dynamic, meaning we can always add or remove properties from an object

// Adding properties
circle.color = 'yellow';
circle.draw = function() {};
console.log(circle);


// Removing properties
delete circle.draw;
console.log(circle);