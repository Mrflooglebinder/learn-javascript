// Prototypical Inheritance: Method Overriding

// Sometimes we need to override a method from a parent object as it may not be suitable for the child object.
// To do this we can simply define create another prototype method with the same name in the child object.
// But we do it on the child object, not on the parent object.

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {
}

// So if this prototype method is being extended to the child object and we need to override it.
// We can simply define the same method in the child prototype object.
Shape.prototype.duplicate = function() {
    console.log('duplicate');
};

function Circle() {
}
extend(Circle, Shape);

// Here we are overriding the duplicate method from the parent object.
Circle.prototype.duplicate = function() {
    // And sometimes we need to call the parent method as well.
    // so if we run c.duplicate()  it will first print 'duplicate' in the console.
    // Followed by 'duplicate circle'.
    Shape.prototype.duplicate.call(this);
    console.log('duplicate circle');
};

const c = new Circle(1, 'green');