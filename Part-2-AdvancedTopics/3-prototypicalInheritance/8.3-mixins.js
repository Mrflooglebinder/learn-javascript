// Prototypical Inheritance: Mixins

// Building on from previous.
// Mixins:
// We are now using creating a mixin function that takes a target object and multiple source objects

// ...sources is a rest operator that takes multiple objects and puts them in an array
function mixin(target, ...sources) {
    // when we use ...sources in the Object.assign method, it is called the spread operator.
    // It takes an array and spreads it into multiple objects.
    Object.assign(target, ...sources);
}

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

// Chanded to use the mixin function
mixin(Person.prototype, canEat, canWalk);

const person = new Person();

function Goldfish() {
}

// Chanded to use the mixin function
mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();

console.log(person);
console.log(goldfish);

