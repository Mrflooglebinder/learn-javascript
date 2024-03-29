// Write a func that takes two numbers and returns the max of the two.
let num1 = 0;
let num2 = 0;

function maxNum(num1, num2){
    if(num1 > num2)
        console.log(num1);
    else if(num2 > num1)
        console.log(num2);
    else 
        console.log('The numbers are equal');
}

maxNum(5, 10); // result: 10
maxNum(15, 10); // result: 15
maxNum(156.23, 156.22); // result: 156.23
