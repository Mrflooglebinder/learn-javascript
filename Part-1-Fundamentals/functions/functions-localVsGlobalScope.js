// Functions: Local vs Global Scope

// Define a variable in the global scope is not a good practice and should be avoided.
const color = 'red'; // Global Scope

function start() {
    const message = 'hi';
    const color = 'blue'; // Local Scope takes precedence over Global Scope (within the function)
    console.log(color);
}

function stop() {
    const message = 'bye';
    console.log(color);
}

// console.log(message);

start();
stop();