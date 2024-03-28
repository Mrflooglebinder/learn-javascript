// Loop break statement
// Breaking a loop in JavaScript using the break statement

// this while loop will run until it reaches 10, which is the original condition set to end the loop: Result: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

console.log('*** loop until i is 10 ***');
let i = 0;
while (i <=10){
    console.log(i);
    i++;
}

// just a to visually separate the two results from the two loops in the console
console.log('*** loop until i is 10 - but Break if i is 5 ***');

// this while loop will run until i reaches 5, then it will break - causing the loop to stop: Result: 0, 1, 2, 3, 4
let j = 0;
while (j <=10){
    if (j === 5) break;
    console.log(j);
    j++;
}
