// Arrays: Spread Operator

const first = [1, 2, 3];
const second = [4, 5, 6];
console.log(first);
console.log(second);

// Using the Spread Operator to:
// Combine the two arrays
const combined = [...first, ...second];
console.log(combined);

// Combine the two arrays and add more elements
const combinedWith = [first, 'a', second, 'b'];
console.log(combinedWith);

// Create a copy of the combined array
const copyOfCombined = [...combined];
console.log(copyOfCombined);