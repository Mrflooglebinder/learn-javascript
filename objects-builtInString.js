// Objects - Built-in String Object
// in JavaScript, the String object is a built-in object that has properties and methods for working with strings.
// a great resource to learn more about the String object is the MDN web docs
// found here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


// String primitive
// When using the dot notation, JavaScript will automatically convert a string primitive to a string object
// so you can use the methods and properties of the String object.
const message = '   This is my first message \n New line \'here\'   ';

// String object
const another = new String('Hi');

console.log(message.length);
console.log(message[0]);
console.log(message[1]);
console.log(message.includes('my'));
console.log(message.includes('not'));
console.log(message.startsWith('This'));
console.log(message.startsWith('this'));
console.log(message.endsWith('e'));
console.log(message.endsWith('message'));
console.log(message.indexOf('is'));
console.log(message.indexOf(' is'));
console.log(message.indexOf('my'));
console.log(message.replace('first', 'second'));
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.trimRight());
console.log(message.trimLeft());
console.log(message.trim());
console.log(message.split(' '));
