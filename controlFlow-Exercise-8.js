// Control Flow Exercise 8

// Get the sum of all the multiples of 3 and 5 below the limit
// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10
// Sum of multiples of 3 and 5 - should result in: 33

console.log(sum(10));

function sum(limit) {
    const m3 = 3;
    const m5 = 5;
    let v1 = 0;
    let v2 = 0;
    
    for (let i = 1; i <= limit; i++) {
        if (i % m3 === 0) v1 += i;
        if (i % m5 === 0) v2 += i;
    }
    console.log('Sum: ', v1 + v2);
}