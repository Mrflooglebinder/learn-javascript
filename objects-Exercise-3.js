// Objects Exercise 3

// Create variables for the address properties
const street = '7 OuttaTime Loop';
const city = 'Hill Valley';
const zipCode = '12345';

let address1 = new Address(street, city, zipCode);
let address2 = new Address('7 OuttaTime Loop', 'Hill Valley', '12345');


// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

// Function to check if the two addresses are equal & return true or false
function areEqual(address1, address2) {
    for (let key in address1){
        if (address1[key] !== address2[key]){
            return false;
        }
    }
    return true;
}

console.log(areEqual(address1, address2));

// Function to check if the two addresses are pointing to the same object & return true or false 
function areSame(address1, address2) {
    return address1 === address2;
}

console.log(areSame(address1, address2));