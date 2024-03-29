// Control Flow Exercise 9

const marks = [80, 80, 50];

// Average = 70

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    let sum = 0;
    let avg = sum / marks.length;
    let mark = '';
    const msg = 'Student Grade is: ';
    let grade = '';

    for (let mark of marks) {
        sum += mark;
        // console.log(sum);
    } 
    avg = sum / marks.length;
    // console.log(avg);

    if (avg < 60) mark = 'F';
    else if (avg < 70) mark = 'D';
    else if (avg < 80) mark = 'C';
    else if (avg < 90) mark = 'B';
    else mark = 'A';
    grade = msg + mark;
    return grade;
}