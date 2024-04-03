// Logical And Operator

// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log('Eligible', eligibleForLoan);