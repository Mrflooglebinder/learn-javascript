// Arrays: Sorting Arrays of Objects

const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'java' }
    ];

console.log(courses);

// This code block sorts the courses array by the name of the courses in ascending order
// This is done by using the sort() method on the courses array & passing in a function as an argument
// the function takes two parameters, a & b, which represent two objects in the courses array
// then the function creates two variables, nameA & nameB, to store the names of the courses from the original array
// the variables are converted to uppercase to make the comparison case-insensitive
// then the function compares the two names in uppercase
// if the first name is less than the second name, the function returns -1 - meaning the first name should come before the second name
// if the first name is greater than the second name, the function returns 1 - meaning the first name should come after the second name
// if the names are equal, the function returns 0 - meaning the order of the two names should not change
// this iteration continues until the array is sorted in ascending order and all the comparison checks return 0 
courses.sort(function(a, b) {
    // create two variables to store the names of the courses from the original array
    const nameA = a.name.toUpperCase(); 
    const nameB = b.name.toUpperCase();

    // compare the two names
    if (nameA < nameB) return -1; // if the first name is less than the second name, return -1
    if (nameA > nameB) return 1; // if the first name is greater than the second name, return 1
    return 0; // if the names are equal, return 0
    }); 
