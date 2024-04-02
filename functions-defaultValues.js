// Functions: Default Values


function interest1(principal, rate, years) {
// Set default values for function parameters
rate = rate || 3.5;
years = years || 5;

    return principal * rate / 100 * years;
}

console.log(interest1(10000, 3.5, 5));
console.log(interest1(10000, 3.5));
console.log(interest1(10000));
console.log(interest1());


console.log('-------------------');


// Since ES6, we can set default values for function parameters in the parameter list
// Set default values for function parameters in the parameter list

// IMPORTANT: Default values must be at the end of the parameter list
// Once you start assigning default values to parameters, you must assign default values to all parameters to the right of
// the parameter with the default value - OTHERWISE, you will get an error or NaN or undefined or some other unexpected result...

// To test this remove the default value for 'years' and see what happens

function interest2(principal, rate = 3.5, years = 5) {
    
        return principal * rate / 100 * years;
    }
    
    console.log(interest2(10000, 3.5, 5));
    console.log(interest2(10000, 3.5));
    console.log(interest2(10000));
    console.log(interest2());