// Arrays: Chaining Mapping & Filtering

const numbers = [1, 2, 3, -1];

const items = numbers
.filter(n => n >= 0)
.map(n => ({ value: n}))
.filter(obj => obj.value > 1)
.map(obj => obj.value);

console.log(numbers);
console.log(items);