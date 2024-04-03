// Arrays: Mapping Array to String
// Mapping an array, allows you to transform each element in the into something else.
// Below we are mapping to string values, but you can map to any type of value.

const numbers = [1, 2, 3, -1];

const filtered1 = numbers.filter(n => n >= 0);

// Mapping the filtered array to a new array of HTML list items
const items = filtered1.map(n => '<li>' + n + '</li>');
console.log(items);

// Joining the items with out a separator - provides a list of HTML list items in a string
// However, the list is not wrapped in a <ul> tag
const html1 = items.join('');
console.log(html1);


// a basic way to wrap the list of items in a <ul> tag
// will cover more advanced ways to do this later in the course
const html2 = '<ul>' + items.join('') + '</ul>';
console.log(html2);