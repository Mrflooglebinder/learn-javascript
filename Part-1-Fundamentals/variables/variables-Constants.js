// Variable Constants (const)

// Previously we used let to declare a variable, which can be changed. 
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);


// If we want to declare a variable that should not be changed, we can use const.
const fixedInterestRate = 0.6;
fixedInterestRate = 1; // Will produce an Error: Assignment to constant variable.
console.log(fixedInterestRate);