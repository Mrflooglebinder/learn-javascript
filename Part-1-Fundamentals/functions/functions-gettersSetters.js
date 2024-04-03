// Functions: Getters and Setters

const person = {
    firstName: 'Marty',
    lastName: 'McFly',
    nickName: '(Great Scott)',
    // Get the full name using a method
    fullNickName() {
        return `${this.firstName} ${this.nickName} ${this.lastName}`;
    },
    // Get the full name using a getter 
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
        }
};

// Call the setter
person.fullName = 'Emmett Brown'; // Set the full name
console.log(person);


// Call the getter
console.log('Using Getter: ', person.fullName); // Marty McFly

// Call the method
// This is read-only
console.log('Using Method: ', person.fullNickName()); // Marty (Great Scott) McFly

// Get the full name using concatenation
console.log('Using concat: ', person.firstName + ' ' + person.lastName); // Marty McFly


// Get the full name using template literals
console.log(`Using string literals ${person.firstName} ${person.lastName}`); // Marty McFly
