// Bitwise Operators

// Read, Write, Execute
// 00000100 (read only)
// 00000010 (write only)
// 00000001 (execute only)
// 00000110 (read and write only)
// 00000111 (read, write and execute)

// Real world example
// Set user permission
const readPermission = 4; // 00000100
const writePermission = 2; // 00000010
const executePermission = 1; // 00000001

// Create a variable to store user permission & initialize it to 0
let myPermission = 0;

// Set user permission to read and write (No execute permission)
myPermission = myPermission | readPermission | writePermission; // 00000110

// Check if user has read permission
// If user has read permission, print 'yes' else print 'no'
let message = (myPermission & readPermission) ? 'yes' : 'no';

// Print message to console
console.log(message); // yes