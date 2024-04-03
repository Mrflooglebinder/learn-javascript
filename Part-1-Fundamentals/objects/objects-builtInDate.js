// Objects - built in Date
// learn more about Date object here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2024, 3, 10, 9);


console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());  // common format for sending date to server
console.log(now.toLocaleString());
now.setFullYear(2030);
console.log(now.toDateString());
