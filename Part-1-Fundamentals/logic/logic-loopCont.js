// Loop continue statement
// Continuing a loop in JavaScript using the continue statement

// this while loop will run until it reaches 10, which is the original condition set to end the loop: Result: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

console.log('*** loop until i is 10 ***');
let i = 0;
while (i <=10){
    console.log(i);
    i++;
}

// just a to visually separate the two results from the two loops in the console
console.log('*** loop until i is 10 - but Break if i is 5 ***');

// this while loop is initially intented to loop until j reaches 10, but...
// due to the if statement, it will only print odd numbers: Result: 1, 3, 5, 7, 9
// the if statement checks if j is an even number, by using the modulo operator & dividing j by 2, if the remainder is 0, then it is an even number
// if j is an even number, it will increment j by 1 and then the continue statement run...
// the continue statement will force the loop to skip the the rest of the current iteration and move on to the next iteration.
let j = 0;
while (j <=10){
    if (j % 2 === 0) {
        j++;
        continue;
    }
    console.log(j);
    j++;
}
