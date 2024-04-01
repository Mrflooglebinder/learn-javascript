// Arrays: Chaining Mapping & Filtering

const numbers = [1, 2, 3, -1];

const filtered1 = numbers.filter(n => n >= 0);

const items1 = filtered1.map(n => ({ value: n}) );

console.log(items1);

// if we dont require the filtered array for anything else we can chain the two operations together like so...
// I have renamed the variables to avoid confusion with the previous example

// const filtered2 = numbers.filter(n => n >= 0);
// when chaining we dont need to store the result of the first operation in a variable, so we can remove the filtered variable.
// So, we can remove this 'const filtered2 = ' 
// We can also remove the ending semicolon ';' as it is no longer a statement on its own as it will be chained with the next operation.
// so we are left with this... 
// 'numbers.filter(n => n >= 0)'
// This is the first operation in the chain.
// We can also remove this 'const items2 = filtered2' from...
// 'const items2 = filtered2.map(n => ({ value: n}) );'
// leaving us with the second part of the chain...
//.map(n => ({ value: n}) );

// Joining the first and second part of the chain we get...
// 'numbers.filter(n => n >= 0).map(n => ({ value: n}) );'
// Now we have one method that is passing results to another method... or...
// The first operation is chaining its result into the second operation...

// For a cleaner more readable code we put each operation on a new line... Like so...
// numbers
// .filter(n => n >= 0)
// .map(n => ({ value: n}) );
// Then store the result in a constant...

const items2 = numbers
.filter(n => n >= 0)
.map(n => ({ value: n}) );

console.log(items2);






