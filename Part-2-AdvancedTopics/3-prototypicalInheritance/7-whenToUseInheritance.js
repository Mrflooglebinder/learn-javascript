// Prototypical Inheritance: When to use Inheritance

// This is not a coding lesson, but rather a discussion on when to use inheritance.
// More so perhaps a fore warning on when not to use inheritance.
// Such as:
// Dont use inheritance by default, if it can be kept simple with just objects and methods then do so.
// Then as your project develops and you see a pattern emerging, then consider refactoring to use inheritance.

// A common mistake is to use inheritance to try and solve a problem that can be solved with composition.

// For example:
// If were creating a cat and a dog object, we might create a animal object and then have cat and dog inherit from animal.
// The animal object might have methods such as: eat, sleep, walk, etc.
// But then we need to create a fish object...
// This would be problematic as a fish cant walk, so we would need to override the walk method in the fish object.

// This could be refactored to use multiple hierarchies, such as:
// animal with methods: eat, sleep
// mammal with methods: walk
// fish with methods: swim

// Then the cat and dog objects would inherit from animal and mammal
// And the fish object would inherit from animal and fish

// This may seem like a better approach as it is provides more flexibility.
// It can become more & more complex as the project grows and more objects are added.

// Rule of thumb: Avoid creating inheritance hierarchies, and if you do, dont go greater than 1 level.

// Famous quote: "Favor composition over inheritance."

// Composition
// Composition is where you create objects that can be composed of other objects.

// For example:
// with the above scenario, we could create the following objects:
// canEat object with method eat
// canWalk object with method walk
// canSwim object with method swim

// Then we could compose the cat object with canEat and canWalk objects
// And the fish object with canEat and canSwim objects