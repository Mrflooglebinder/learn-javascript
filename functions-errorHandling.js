// Functions: Error Handling

const person = {
    firstName: 'Marty',
    lastName: 'McFly',
    nickName: '(Great Scott)',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        // Error Handling - Using Try and Catch
        if (typeof value !== 'string') 
        throw new Error('Value is not a string.');
    
        const parts = value.split(' ');
        // Error Handling - Using Try and Catch
        if (parts.length !== 2)
            throw new Error('Enter a First & Last Name.');
        this.firstName = parts[0];
        this.lastName = parts[1];
        }
};

// Error Handling - Using Try and Catch
try {
    person.fullName = null;
}

catch(e) {
    // Using the alert is NOT a good practice - purely to demonstrate the error message for this lesson
    alert(e)
}

console.log(person);

