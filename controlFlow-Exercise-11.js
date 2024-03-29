// Control Flow Exercise 11

// Prime Number (a number that is only divisible by 1 and itself)
// 11 = 1, 11
// 13 = 1, 13

// Composite Number (a number that is divisible by 1, itself and other numbers)
// 12 = 1, 2, 3, 4, 6, 12
// can be divided evenly by its factors

showPrimes(69);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0) 
            return false;

    return true;
}