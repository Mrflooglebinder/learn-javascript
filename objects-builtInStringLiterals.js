// Objects - String Literals

// String primitive
const message = 
'This is my \n' +
'\'first\' message ';

console.log(message);

// Lierals 
// Object {}
// Boolean true, false
// String '', ""
// Template ``   (uses backticks)

// example of template string
const another = 
`This is my 
'first' message`;
console.log(another);

// real world example:
// auto email reply from joining a mailing list

const name = 'Marty';
const email = 
`Hi ${name},

Thank you for joining my mailing list.

Regards,

Doc Brown`;

console.log(email);
