// Prototypical Inheritance: Mixins

// Using the Object.assign method, we can combine multiple objects into a single object.
// Below we are creating a person object that is composed of the canEat and canWalk objects.

const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function() {
        console.log('walking');
    }
};

// composing person object by assigning a new empty object with the canEat and canWalk objects
const person = Object.assign({}, canEat, canWalk);
console.log(person);