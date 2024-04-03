// Functions: Rest Operator
// The rest operator is called 'rest' because it collects the 'rest' of the arguments passed to a function
// It MUST be the last parameter in the function definition or it will throw an error!

// the parameter below is called the 'rest operator'
// it allows us to pass any number of arguments to a function
// this is a cleaner way to handle multiple arguments than using the arguments object - like in the previous lesson
function sum(...args) {
    console.log(args); 

}

// This will return an array of all the arguments passed to the function - Result: [1, 2, 3, 4, 5, 10]
console.log(sum(1, 2, 3, 4, 5, 10));

//additional to the lesson:

const v1 = 1;
const v2 = 5;
const v3 = 10;
const v4 = 20;
const v5 = 50;
const v6 = 100;

console.log(sumDynamicArgs(v1, v2, v3, v4, v5));

function sumDynamicArgs(...args) {
    return args.reduce((a, b) => a + b);
}

console.log(sumDiscountPrices(0.1, 20, 30, 50));

function sumDiscountPrices(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);  // a cleaver way to apply a discount to the total - nice and clean
}