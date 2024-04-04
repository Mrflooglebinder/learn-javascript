# learn-javascript

This repo is to capture my notes while taking a Javascript course called `The Ultimate JavaScript Mastery Series` - `Part 1` and `Part 2` by [`Code with Mosh`](https://codewithmosh.com/).  
Mixed with some additional notes from self learning & other sources.

## The Ultimate JavaScript Mastery Series - `Part 1`

## Section 1

### What is JavaScript?

- JavaScript is a programming language that is used to make web pages interactive.
- It is a high-level, interpreted programming language.
- Originally, javascript could only run in the browser. But since the introduction of Node.js, it can now ran elsewhere such as on:
  - Servers
  - Desktop applications
  - Mobile applications

### Separation of Concerns

Using HTML, CSS and JavaScript, we can separate the concerns of our application. Meaning, we can separate the structure, presentation and behavior of our application into separate files. This makes our code more organized and easier to maintain.  

### Setting up the Development Environment

- We can write JavaScript code in any text editor. But it is recommended to use an IDE (Integrated Development Environment) such as `Visual Studio Code` better known as `VS Code`.
- While not required, it is recommended to install `Node.js` on your machine. This will allow you to run JavaScript code outside of the browser.

#### VS CODE - Extensions

> Extensions are add-ons that allow you to customize and enhance your experience in Visual Studio Code.
The following are recommended extensions for JavaScript development:

- `Prettier` - Code formatter
- `Live Server` - Quick & easily launch a dev server at a click of a button. 
- `Babel JavaScript` - Syntax Highlighting

## Section 2

### Variables

JavaScript is a dynamic language, so you don't have to specify the type of a variable. Using the `let` keyword to declare a variable, you can change the value of a variable throughout the program. JavaScript takes care of the data type for you.

#### Nameing Conventions

> ALWAYS, use good nameing conventions!  
> Variable names should be a `meaningful name` that `describes the data` it holds.  

**Rules for variable names:**

- Case-Sensitive, `user` and `User` are two different variables.
- Cannot start with a number.
- Cannot contain spaces or hyphens (-).
- Cannot be a reserved keyword, such as `let`, `if`, `else`, `for`, etc.

**Syntax to declare a variable:**

```js
let variableName = value;
```

---

### Constants

Use the `const` keyword to declare a constant. Constants are variables that cannot be reassigned a new value. This type of variable is used when you want to store a value that should not change throughout the program.  
Examples of when you would use a constant are:

- The value of PI
- The number of days in a week
- The number of hours in a day

Syntax to declare a constant:

```js
const constantName = value;
```

---

### Primitive Types

Primitive types are the most basic data types in JavaScript. They include:
String, Number, Boolean, Undefined, Null.

```js
let user = 'John'; // String Literal - text wrapped in single or double quotes
let age = 35; // Number Literal / a number without quotes
let isApproved = true; // Boolean Literal - a true or false value
let firstName ; // Undefined - a variable declared but not assigned a value
let lastName = undefined; // Undefined - a variable that has been `explicitly` set to undefined - not often used
let selectedColor = null; // Null - used to clear the value of a variable
```

### Dynamic Typing

JavaScript is a dynamically typed language. This means that you don't have to specify the type of a variable. JavaScript will determine the type of the variable at runtime. This is different from statically typed languages like C# or Java, where you have to specify the type of a variable when you declare it.

### Objects

Objects are used to store a collection of key-value pairs. The key is a string that identifies the value, and the value can be any data type. Objects are used to represent real-world entities.  
Examples of objects and some of their properties:

- Person
  - First Name
  - Last Name
  - Age

- car
  - Make
  - Model
  - Year


- book
  - Title
  - Author
  - Blurb

Syntax to declare an object:

```js
let person = {
  name: 'John',
  age: 35
};
```

Calling the object and or its properties:

```js
console.log(person);
console.log(person.name);
console.log(person.age);
```

---

### Arrays

Arrays are used to store a collection of values. The values can be of any data type. Arrays are used to represent a list of items.

To define an array of 4 colors:

```js
let selectedColors = ['red', 'blue', 'green', 'yellow'];
```

To print the array to console:

```js
console.log(selectedColors); // [ 'red', 'blue', 'green', 'yellow' ]
```

To print individual elements of the array:

```js
console.log(selectedColors[0]); // red
console.log(selectedColors[1]); // blue
console.log(selectedColors[2]); // green
console.log(selectedColors[3]); // yellow
```

To get the length of the array (`count` of `elements` in the array)
```js
console.log(selectedColors.length); // 4
```

Add a new color to the array

```js
selectedColors[4] = 'black';
console.log(selectedColors.length); // 5
```

---

### Functions

Functions are a set of statements that perform a task or calculate a value. Functions allow you to write reusable code. You can define a function once and call it as many times as you want.

Defining a function called greet that logs 'Hello World' to the console

```js
function greet() {
    console.log('Hello World');
}

greet(); // Hello World
```

#### Using String Concatenation

This is an older technique that is still used but is not as common as template literals.  
String concatenation is the process of combining two or more strings together. This is done using the `+` operator.

Defining a function called greetName that logs 'Hello' + the name passed in as an argument to the console

```js
function greetFirstName(fName) {

    console.log('Hello ' + fName);
}
greetFirstName('Marty'); // Hello Marty
```

#### Using template literals

A newer technique that is more common and is the recommended method for working with strings in JavaScript. Its more readable and easier to use than string concatenation, more so when working with multiple variables or complex expressions. It supports multi-line strings and string interpolation, meaning you can embed expressions in the string & can break the string into multiple lines.

Function that logs 'Hello' + the name passed in as an argument to the console using template literals.

```js
function greetLastName(lName) {
    console.log(`Hello ${lName}`);
}
greetLastName('McFly'); // Hello McFly
```

Function that logs 'Hello' + the first name and last name.

```js
function fullGreeting(fName, lName) {
    console.log(`Hello ${fName} ${lName}`);
}
fullGreeting('Marty', 'McFly'); // Hello Marty McFly
```
### Types of Functions

Functions can be broken down to two main purposes, `performing a task` or `calculating a value`.  

> Performing a task  

- Log a msg to console
- Send HTTP request
- Save data to database
  
> Calculating a value  

- Total price of a product
- Count number of list items
- Deducting a discount from a price  
---

### The 'this' Keyword

> `this` is a keyword, it refers to the object that is executing the current function.  

**Rule of Thumbs**:  
If the function is part of an object, we call that function a method.  
So if that function is a method in an object, 'this' references that object itself.  
`method` -> `object`  

If the function is a regular function, then 'this' references the global object.  
Meaning it references the:  
`function` -> `global` (window, global)  
---> window object in the browser &  
---> global object in Node.js.  

---
---

## Operators

Operators are used to perform operations on variables and values. JavaScript has the following types of operators:
arithmetic, assignment, comparison, Equality, Terinary, Logical, Logical Non-Boolean, Bitwise.  

### Arithmetic Operators

Arithmetic operators are used to perform arithmetic operations on numbers.  
Such as:  

- Addition `+`
- Subtraction `-`
- Multiplication `*`
- Division `/`
- Exponentiation `**`
- Modulus `%` - Remainder of a division operation

There are also Increment and Decrement operators that are used to increase or decrease the value of a variable by 1.  

Increment `++`  
Is used to increase the value of a variable by 1.  
Depending on where the operator is placed, it will either increment the value before or after the current value is used.  

```js
let x = 10;
console.log(x++);   // prints x (10) to console and then increments x up by 1
console.log(++x);   // increments x (10) up by 1 and then prints x (11) to console 
```

Decrement `--`  
Same as the increment operator, but decreases the value of a variable by 1.  

```js
let y = 10;
console.log(y--);   // prints y (10) to console and then decrements y down by 1
console.log(--y);   // decrements y (10) down by 1 and then prints y (9) to console 
```

---

### Assignment Operators

Assignment operators are used to assign values to variables.
The `=` operator is used to assign a value to a variable.  

The `+=`, `-=`, `*=`, `/=`, `%=`, `**=` operators are used to perform an operation on a variable and then assign the result to the same variable.  

For the next few examples we will assume use the following variable is set before each operation.  

```js
let x = 10;
```

To increment by more than a value of one. Such as to add 5 to the value of x.

```js
x += 5;
console.log(x); // result: 15
```

The above is a concise way of writing the below.

```js
x = x + 5;
console.log(x); // result: 15
```

To multiply x by 3.

```js
x *= 3;
console.log(x); // result: 30
```

### Comparison Operators

`JS` comparison operators are used to compare two values in a script. These operators return a Boolean value (`true` or `false`) depending on whether the comparison is `true`.  

`Relational Operators`  
Used to compare values, they return a boolean value, either true or false.  
`>` - `Greater than`: Returns true if the value of the left operand is greater than the value of the right operand.  
`<`- `Less than`: Returns true if the value of the left operand is less than the value of the right operand.  
`>=` - `Greater than or equal to`: Returns true if the value of the left operand is greater than or equal to the value of the right operand.  
`<=` `Less than or equal to`: Returns true if the value of the left operand is less than or equal to the value of the right operand.  


```js
let x =1;
console.log(x > 0); // Result: true
console.log(x >= 1); // Result: true
console.log(x < 1); // Result: false
console.log(x <= 1); // Result: true
```

### Equality Operators

There are two types of `Equality Operators` in JavaScript.  
`Strict Equality` and `Loose Equality`.  

`Strict Equality`  
Used to compare values using `===` this return a boolean value, either true or false.  
This will ONLY return true if;  

- The values of the two operands are equal
- And are of the same type.  

```js
console.log(1 === 1); // Retuns: true
console.log('1' === 1); // Returns: false
```

`Loose Equality`  
Used to compare values using `==` this return a boolean value, either true or false.  
This will return true if; 

- The values of the two operands are equal
- Regardless of their type.  

Examples of `Loose` Equality Operator

```js
console.log(1 == 1); //Retuns: true
console.log('1' == 1); // Returns: true
console.log('1' == '1'); // Returns: true
console.log(true == 1); // Returns: true
console.log(true == '1'); // Returns: true
console.log(true == 0); // Returns: false
console.log(true == '0'); // Returns: false
```

`Not Equal` and `Not Strict Equal`
The `!=` and `!==` operators are used to check if two values are not equal.  
The `!=` operator returns true if the two operands are not equal regardless of their type.
The `!==` operator returns true if the two operands are not equal and are of different types.

```js
let x =1;
console.log(x === 1); // Result: true
console.log(x !== 1); // Result: false
```

---

### Ternary Operators

The `Ternary Operator` is a shorthand way of writing an `if...else` statement.
It is used to assign a value to a variable based on a condition.
The syntax of the ternary operator is as follows:

```js
let variableName = (condition) ? value1 : value2;
```

**Explained**:  
`condition`: If the condition is truthy, value1 is selected; otherwise, value2 is chosen.  
`?`: Acts as a shorthand for `if`. It checks the condition and decides which value (to the left or right of `:`) should be assigned based on the condition's truthiness.  
`:`: This functions like `else`. It separates the two possible outcomes (`value1` and `value2`).  
`Value1` Assigned to variableName if the condition is truthy.
`Value2` Assigned to variableName if the condition is falsy.

**Example**:  
If client has more than 100 points - They are a gold client
Otherwise - They are a silver client

```js
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type); // Result: gold
```

---

## Logical Operators

### Logical And

`&&`: Returns TRUE if both operands are TRUE

```js
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
```

The below example will return `true` if the client has a `high income` and a good `credit score`.

```js
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log('Eligible', eligibleForLoan); // Result: Eligible true
```

### Logical OR

`||`: Returns TRUE if one of the operands is TRUE

```js
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false
```

The below example will return `true` if the client has a `high income` or a good `credit score`.

```js
let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan); // Result: Eligible true
```

### Logical NOT

`!`: Returns TRUE if the operand is FALSE - and vice versa.
The not operator is typically used to negate the value of an expression.  

```js
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused); // Result: Application Refused false
```

---

### Bitwise Operators

Bitwise operators are used to perform bitwise operations on numbers.
This means they operate on the binary representation of those numbers.

Belo

// Read, Write, Execute
// 00000100 (read only)
// 00000010 (write only)
// 00000001 (execute only)
// 00000110 (read and write only)
// 00000111 (read, write and execute)

**Example**:  
Initialise user permission constants

```js
const readPermission = 4; // 00000100
const writePermission = 2; // 00000010
const executePermission = 1; // 00000001
```

Create a variable to store user permission & initialize it to 0

```js
let myPermission = 0;
```

Set user permission to read and write (No execute permission)

```js
myPermission = myPermission | readPermission | writePermission; // 00000110
```

Check if user has read permission
If user has read permission, print 'yes' else print 'no'

```js
let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message); // yes
```

---

### Operators Precedence

Operators precedence is the order in which operators are executed in an expression. Similar to the order of operations in mathematics where multiplication and division are performed before addition and subtraction.

In JS we can use parentheses to change the order of operations.  

There is a vast list that defines the operator precedence in JavaScript, for now just understand that the precedence of an operator determines the order in which it is executed.


Below is an example of how operator precedence works.  
The 3 * 4 is executed first, then the result is added to 2. Due to the precedence of the `*` operator.

```js
let x = 2 + 3 * 4;
console.log(x); // Result: 14
```

Wrapping the `2 + 3` in parentheses will change the order of operations.
Below will first add 2 + 3, due to the parentheses, then multiply the result by 4. Resulting in a completely different result.

```js
let y = (2 + 3) * 4;
console.log(y); // Result: 20
```

---

## Control Flow

In JavaScript, we have a the `if...else` and the `switch...case` that are used to make decisions in our code & to control the flow of our program.  

`If...Else`: Will execute a block of code if a specified condition is true. If the condition is false, another block of code can be executed.  

Explanation of the `If...Else` statement.

```js
if (condition) {
    statement1
} 
else if (anotherCondition) {
    statement2
}
else if (yetAnotherCondition) {
    statement3
}
else {
    statement4
}
```







`Switch...Case`: Will execute

---

## Loops

> Loops are used to execute a block of code multiple times, until a specified condition is met.  
> In JavaScript, we have the `for` loop, the `while` loop, the `do...while` > loop, the `for...in` loop, and the `for...of` loop.  

### For Loop

`For loops` are used to execute a block of code a specified number of times.  

**Basic Syntax**:  

```js
for (initialExpression; condition; incrementExpression) {
    statement
}
```

**Example**: of a `For Loop` that will print the numbers 1 to 5 to the console.

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

> **Note**: pay attention to the `Semi-colon`  
> The `;` is used to separate the different parts of the `for` loop, as follows:  
> initialExpression`;` condition`;` incrementExpression  
> let i = 1`;` i <= 5`;` i++  

**The Breakdown**:  
`for` - The `For Statement`: This is the block of code that is executed for each iteration of the loop.  
`let i = 1;` - The `Initial Expression`: This is where we initialize the loop variable. In this case, we are initializing `i` to 1.  
`i <= 5;` - The `Condition`: This is the condition that is checked before each iteration of the loop. If the condition is true, the loop will continue to run. If the condition is false, the loop will stop.
`i++` - The `Increment Expression`: This is where we increment the loop variable. In this case, we are incrementing `i` by 1 after each iteration of the loop.  
`console.log(i);` - The `Statement`: This is the block of code that is executed for each iteration of the loop. In this case, we are printing the value of `i` to the console.  

---

### While Loop

`While Loops` are used to execute a block of code as long as a specified condition is true.  

**Basic Syntax**:  

```js
while (condition) {
    statement
}
```

**Example**: of a `While Loop` that will print the numbers 1 to 5 to the console.

```js
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
```

**The Breakdown**:  
`let i = 1;` - The `Initial Expression`: This is where we initialize the loop variable. In this case, we are initializing `i` to 1.  
`while` - The `While Statement`: This is the block of code that is executed as long as the condition is true.  
`i <= 5;` - The `Condition`: This is the condition that is checked before each iteration of the loop. If the condition is true, the loop will continue to run. If the condition is false, the loop will stop.  
`console.log(i);` - The `Statement`: This is the block of code that is executed for each iteration of the loop. In this case, we are printing the value of `i` to the console.  
`i++;` - The `Increment Expression`: This is where we increment the loop variable. In this case, we are incrementing `i` by 1 after each iteration of the loop.  

---

### Do...While Loop

`Do...While Loops` are used to execute a block of code at least once, and then continue to execute the block of code as long as a specified condition is true.  

**Basic Syntax**:  

```js
do {
    statement
} while (condition);
```

**Example**: of a `Do...While Loop` that will print the numbers 1 to 5 to the console.  
Where the `do` will continue to iterate until the `while` condition is false.  

```js
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
```

**The Breakdown**:  
`let i = 1;` - The `Initial Expression`: This is where we initialize the loop variable. In this case, we are initializing `i` to 1.  
`do` - The `Do Statement`: This is the block of code that is executed at least once. In this case, we are printing the value of `i` to the console.  
`console.log(i);` - The `Statement`: This is the block of code that is executed for each iteration of the loop. In this case, we are printing the value of `i` to the console.  
`i++;` - The `Increment Expression`: This is where we increment the loop variable. In this case, we are incrementing `i` by 1 after each iteration of the loop.  
`while` - The `While Statement`: checks the condition after the block of code has been executed.  
- If the condition is true, the loop will continue to run from the top of the `do` block.  
- If the condition is false, the loop will stop.  


---

### For...In Loop

`For...In Loops` are used to iterate over the properties of an object.  
Such as the properties of an object or the elements of an array.  

**Basic Syntax**:  

```js
for (variable in object) {
    statement
}
```

**Example - For...In Object**:  
This `For...In Loop` will print the properties of an object to the console.  

```js
const person = {
    name: 'John',
    age: 30
};

for (let key in person) {
    console.log(key, person[key]);
}
```

**The Breakdown**:  
`for` - The `For Statement`: This is the block of code that is executed for each iteration of the loop.  
`let` - The `Variable`: This is the variable that is used to store the property value of the object.  
`key` - The `Key`: is the property name of the object.  
`in` - The `In Operator`: This is used to iterate over the properties of an object.  
`person` - The `Object`: This is the object that we are iterating over.  
`console.log(key, person[key]);` - The `Statement`: This is the block of code that is executed for each iteration of the loop. In this case, we are printing the property name and value of the object to the console.  
`[key]` - The `Bracket Notation`: This is used to access the value of the property of the object. This will return the value of the property name stored in the `key` variable and will change on each iteration of the loop until all properties have been printed to the console.  

**Example - For...In Array**:  
This `For...In Loop` will print the elements of an array to the console.  

```js
const colors = ['red', 'blue', 'green'];

for (let index in colors) {
    console.log(index, colors[index]);
}
```

**The Breakdown**:
`for` - The `For Statement` is the block of code that is executed for each iteration of the loop.  
`let` - The `Variable` is the variable that is used to store the index value of the array.  
`index` - The `Index` is the index value of the array.  
`in` - The `In Operator` is used to iterate over the elements of an array.  
`colors` - The `Array` is the array that we are iterating over.  
`console.log(index, colors[index]);` - This is the `Statement` it's the block of code that is executed for each iteration of the loop. In this case, we are printing the `index value` and the `element` of the array to the console.  
`[index]` - The `Bracket Notation` is used to access the element of the array. This will return the element of the array stored in the `index` variable and increment up by 1 on each iteration of the loop until all elements have been printed to the console.  

> NOTE: the `For...In Loop` is not recommended for iterating over arrays as it can be slow and can have unexpected results.  
> The best practice is to use the `For...Of Loop` when iterating over the elements of an array, which we will cover next.  

---

### For...Of Loop

`For...Of Loops` are used to iterate over the elements of an array.  
Similar to the `For...In Loop` but is specifically used to iterate over the elements of an array.  

**Basic Syntax**:  

```js
for (variable of object) {
    statement
}
```

**Example**: of a `For...Of Loop` that will print the elements of an array to the console.  

```js
const colors = ['red', 'blue', 'green'];

for (let color of colors) {
    console.log(color);
}
```

**The Breakdown**:
`for` - The `For Statement` is the block of code that is executed for each iteration of the loop.  
`let` - The `Variable` is the variable that is used to store the element value of the array.  
`of` - The `Of Operator` is used to iterate over the elements of an array.  
`colors` - The `Array` is the array that we are iterating over.
`console.log(color);` - This is the `Statement` it's the block of code that is executed for each iteration of the loop. In this case, we are printing the `element` of the array to the console.  

---


## Truthy and Falsy Values

### Falsy Values

In JavaScript, a value is considered falsy if it evaluates to false when checked in a Boolean context.  
There are exactly six falsy values:  

The boolean - `false`  
The number zero `0` - including Negative zero `-0`  
Empty strings such as: double quotes `""`, single quotes or `''`, or backticks ``` `` ```  
Null value - `null`  
Undefined value - `undefined`  
Not a Number - `NaN`  

### Truthy Values

Any value in JavaScript that is not one of the falsy values listed above is considered truthy.  

All objects (`{}`, `[]`, etc.)  
All `non-zero` numbers (including negative numbers)  
All `strings`, including whitespace `" "` and strings with zero `"0"`  
The boolean `true`  
All function references such as `function() {}` & `() => {}`  

Essentially, any value that is not explicitly falsy is truthy in JavaScript, which covers a wide range of data types and values. This concept is fundamental to understanding and effectively utilizing conditionals and logical operations in JavaScript.  
