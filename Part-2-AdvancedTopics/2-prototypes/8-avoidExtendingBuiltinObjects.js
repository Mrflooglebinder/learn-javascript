// Prototypes: Avoid Extending the Built-in Objects

// Avoid Extending Built-in Prototypes:
// Such as modifying prototypes like 'Array'... Which is a built-in object in JavaScript.
// doing so can lead to compatibility issues, conflicts with other libraries, and unexpected global side effects.

Array.prototype.shuffle = function() {
    // ...
}

const array = [];
array.shuffle();

// CAUTION!
// This is a bad practice.
// CAUTION!

// Instead, create a new object that wraps the built-in object.
