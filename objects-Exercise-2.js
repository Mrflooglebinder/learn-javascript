// Objects - Exercise 2
// in this exercise you need to initialize an address object
// First using a factory function and then using a constructor function

// The object shall have the following properties:
//     street: '7 OuttaTime',
//     city: 'Hill Valley',
//     zipCode: '12345'

// Create variables for the address properties
const street = '7 OuttaTime';
const city = 'Hill Valley';
const zipCode = '12345';


// Factory Function
function createAddress1(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

// Call the Factory Function
let address = createAddress1(street, city, zipCode);
console.log(address);


// Constructor Function
function createAddress2(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

// Call the Constructor Function
let address2 = new createAddress2(street, city, zipCode);
console.log(address2);

