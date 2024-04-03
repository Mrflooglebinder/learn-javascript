// Control Flow Exercise 9

const array = [80, 80, 50];

// Average = 70

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(array));

function calculateGrade(peanutButter) {
    const average = calculateAverage(peanutButter);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function calculateAverage(jelly) {
    let sum = 0;
    for (let value of jelly)
    sum += value;
return sum / jelly.length;
}