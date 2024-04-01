// Arrays: Exercise 2

const numbers = [1, 2, 3, 4];

console.log(numbers.includes(1));

// create a function that operates just like the includes method

console.log(includes(numbers, 1));

function includes(array, searchElement) {
    for (let element of array) 
        if (element === searchElement)
            return true;
    return false;
}