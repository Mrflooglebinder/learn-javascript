// Logical Or Operator

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);

// NOT (!)
// the not operator is used to negate the value of an expression
// if the expression is true, it will return false & vice versa...
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);