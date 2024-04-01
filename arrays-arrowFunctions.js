// Arrays: Arrow Functions 


const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

// This is an arrow function that finds the first element in the array that matches the condition
// It is a cleaner way to write the same function from the previous lecture
const course = courses.find(course => course.name === 'a');
console.log(course); 


// // Previously we used this function to find the index of an object in an array
// // When we are using a function as an argument to another function, we can replace it with an arrow function
// // We can shorten this function by using an arrow function

// // The following is broken down into steps to show the process of converting a function to an arrow function
const course1 = courses.find(function(course1) {
    return course1.name === 'a'
});
console.log(course1); 

// // Steps to convert
// // remove the keyword 'function' and add a fat arrow '=>' to separate the parameters from the body of the function
// const course = courses.find((course) => {
//     return course.name === 'a'
// });
// console.log(course); 

// // If the function has a single parameter, we can remove the parentheses
// // If the function has no parameters, we need to keep an empty parentheses... ie find(course() => {})
// const course = courses.find(course => {
//     return course.name === 'a'
// });
// console.log(course); 

// // If the function has a single line of code & it is returning a value, we can remove the curly braces and the return keyword
// const course = courses.find(course =>
//     course.name === 'a'
// );
// console.log(course); 

// // And finally, we can move the line of code to the same line as the arrow function
// const course = courses.find(course => course.name === 'a');
// console.log(course); 
