// Prototypical Inheritance: Mixins

// Building on from previous.
// We are now using the Object.assign method to create multiple objects that are composed of multiple objects, but not always the same objects.
// This is composition NOT inheritance.

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

const canSwim = {
    swim: function() {
        console.log('swim');
    }
};

function Person() {
}

Object.assign(Person.prototype, canEat, canWalk);

const person = new Person();

// Now we can create a Goldfish object that can eat and swim
function Goldfish() {
}

// composing goldfish object by assigning the Goldfish prototype with the canEat and canSwim objects
Object.assign(Goldfish.prototype, canEat, canSwim);

// creating a new goldfish object
const goldfish = new Goldfish();

// logging the person and goldfish objects to the console where we can inspect the objects
// where we will find that the 
// person object has the eat and walk methods
// goldfish object has the eat and swim methods
console.log(person);
console.log(goldfish);

