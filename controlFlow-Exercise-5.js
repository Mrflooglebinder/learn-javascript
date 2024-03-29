// Control Flow Exercise 5

// create a func that takes an argument limit
// the limit should be of type 'number'
// with the number passed, the function should display all the numbers from 0 to the limit
// allong with the number, the function should display if the number is even or odd

showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}