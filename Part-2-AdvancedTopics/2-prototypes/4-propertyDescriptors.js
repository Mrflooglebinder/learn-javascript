// Prototype: Property Descriptors

let person1 = { name: 'Marty' };
let person2 = { name: 'Doc' };
let person3 = { name: 'Einstein' };
let person4 = { name: 'Biff' };
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);

Object.defineProperty(person1, 'name', {
        // writable: false,
        // enumerable: false,
        // configurable: false,
    });

Object.defineProperty(person2, 'name', {
        writable: false,
        // enumerable: false,
        // configurable: false,
    });

Object.defineProperty(person3, 'name', {
        writable: false,
        enumerable: false,
        // configurable: false,
    });
    
Object.defineProperty(person4, 'name', {
        writable: false,
        enumerable: false,
        configurable: false,
    });

person1.name = 'Marty McFly';
person2.name = 'Doc Brown';
person3.name = 'Einstein the Dog';
person4.name = 'Biff Tannen';
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);

for (let key  in person1)
console.log(key);
console.log( Object.keys(person1));

for (let key  in person2)
console.log(key);
console.log( Object.keys(person2));

for (let key  in person3)
console.log(key);
console.log( Object.keys(person3));

for (let key  in person4)
console.log(key);
console.log( Object.keys(person4));


console.log('Attempting to delete Einstein the Dog...');
delete person3.name;
console.log(person3);
console.log('Deleted...');

console.log('Attempting to delete Biff Tannen...');
delete person4.name;
console.log(person4);
console.log('Unable to delete due to configurable attribute set to false...');
