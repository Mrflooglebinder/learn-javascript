// Arrays: Chaining Mapping & Filtering

const numbers = [1, 2, 3, -1];

const items = numbers
.filter(n => n >= 0)
.map(n => ({ value: n}))
// The above is creating a new array of objects, each object has a value property.

// we can chain as many methods as we want, like the below filter to get only the values greater than 1
.filter(obj => obj.value > 1)
// We can also chain those result into another method...
// Like using the map method to store the value property of each object in the items array into a new array of numbers.
// In short converting an array of objects --- into --- an array of numbers. 
.map(obj => obj.value);

console.log(numbers);
console.log(items);