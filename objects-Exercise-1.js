// Objects - Exercise 1

const address = {
    street: '7 OuttaTime',
    city: 'Hill Valley',
    zipCode: '12345'

}

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

console.log(showAddress(address));