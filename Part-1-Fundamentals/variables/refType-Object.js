// Objects: ReferenceObjects

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 35
};

console.log(person.firstName); // John

// Dot Notation
// Dot notation is the most common way to access the properties of an object.
person.firstName = 'Marty';
console.log(person.firstName);

// Bracket Notation
person['lastName'] = 'Mcfly';
console.log(person['lastName']);

// Which approach to use?
// Dot notation is more concise and easier to read, so should be preferred where possible. 

// However, it doesn't work in all situations, sometimes you dont know the property name until runtime,
// such as when property names are determined at runtime (e.g., from user input or variables).
// in which case you have to use bracket notation.

// Example of this:
// We might need to update a property based on user input, in which we might define for a selected property & what ever value the user inputs, 
// will be assigned to that property. In this case we are simulating this as if the user selected the age property.
let selection = 'age';
person[selection] = 40;

console.log(person[selection]); // 40
console.log(person.age); // 40