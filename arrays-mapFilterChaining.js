// Arrays: Chaining Mapping & Filtering

const numbers = [1, 2, 3, -1];

const items = numbers
.filter(n => n >= 0)
.map(n => ({ value: n}) );

console.log(items);
