// Arrays: Sorting Arrays of Numbers & Strings
// The below is useful for numbers & strings but NOT for arrays of objects...

const numbers = [4, 2, 5, 3, 1];
const letters = ['b', 'c', 'e', 'd', 'a'];
const combined = numbers.concat(letters);
console.log(numbers);
console.log(letters);
console.log(combined);

const sortedNumbers = numbers.sort();
const sortedLetters = letters.sort();
console.log(sortedNumbers);
console.log(sortedLetters);

const reversedNumbers = numbers.reverse();
const reversedLetters = letters.reverse();
console.log(reversedNumbers);
console.log(reversedLetters);


console.log(combined);
const combinedSorted = combined.sort();
console.log(combinedSorted);
const combinedReversed = combined.reverse();
console.log(combinedReversed);
