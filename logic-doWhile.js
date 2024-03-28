// Do While loop

//For loop
// Incrementing - with if statement to only print odd numbers
for (let i =0; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i)
}
console.log('')

// While loop
let j = 0;
while (j <= 5) {
    if (j % 2 !== 0) console.log(j)
    j++;
}
console.log('')

//Do While loop
// let k = 0; // comment out and the do while loop will still run, but only once...
let k = 9;
do {
    if (k % 2 !== 0) console.log(k)
    k++;
} while (k <= 5)
