// For Loops

// For Loop Syntax
for (let i =0; i < 5; i++) {
  console.log('Hello World', i)
}
console.log('')
 
for (let i =1; i <= 5; i++) {
    console.log('Hello World', i)
}
console.log('')

// Incrementing and Decrementing

// Incrementing - with if statement to only print odd numbers
for (let i =1; i <= 5; i++) {
    if (i % 2 !== 0) console.log('Increment Odd Nums', i)
}
console.log('')

// Decrementing - with if statement to only print odd numbers
for (let i =5; i >= 1; i--) {
    if (i % 2 !== 0) console.log('Decrement Odd Nums', i)
}