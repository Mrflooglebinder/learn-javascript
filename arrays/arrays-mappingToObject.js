// Arrays: Mapping Array to Object

const numbers = [1, 2, 3, -1];

const filtered1 = numbers.filter(n => n >= 0);

// Mapping the filtered array to a new array of HTML list items
const items = filtered1.map(n => {
    const obj = { value: n};
    return obj;
});
console.log(items);


// like the above but cleaner
// We dont need to create a variable to store the object and then explicitly return it
// we can simply return the object literal directly - like so...
const itemsReturn = filtered1.map(n => {
    return { value: n};
});
console.log(itemsReturn);


// In a previous lecture we learned that if we are returning a single expression from an arrow function we can omit the curly braces and the return keyword. But when we are returning an object literal it doesnt work as expected.
const itemsReturn2 = filtered1.map(n => { value: n});
console.log(itemsReturn2);

// To make it work we need to wrap the object literal in parentheses
const itemsReturn3 = filtered1.map(n => ({ value: n}) );

console.log(itemsReturn3);






