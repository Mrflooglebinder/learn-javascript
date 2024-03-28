// Comparison Equality Operators 
console.log('Equality Operator - Continued');

console.log(' > Equality Operator | Strict [Same Type & Same Value]');
console.log(1 === 1);
console.log('1' === 1);

console.log(' > Equality Operator | Lose []');
console.log(1 == 1);
console.log('1' == 1);          // This will conver the RHS number value to a string value
console.log('1' == '1');        // Which will produce the same result as this.
console.log(true == 1);         // or a true can compare to a "1" which is true
console.log(true == '1');       // or a string "'1'" which is also true.
console.log(true == 0);         // but comared to a '0' is false. 
console.log(true == '0');       // even if it is a string 