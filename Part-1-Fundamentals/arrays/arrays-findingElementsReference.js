// Arrays: Finding Elements Reference Type

const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];


// DONT USE:
// This is not the correct way to find the index of an object in an array - as both the objects are stored in different memory locations
console.log(courses.includes({ id: 1, name: 'a' })); // false



// To find the index of an object in an array, we need to use the findIndex method
// this returns the first index of the object in the array - else it returns undefined
const course = courses.find(function(course) {
    return course.name === 'a';
});
console.log(course); // { id: 1, name: 'a' }



// To search the array for the first occurance of the value searched
// Returns the 'index' of the element object in the array 
const courseIndex = courses.findIndex(function(course) {
    return course.name === 'b';
});
console.log(courseIndex); // 0

