// Prototypical Inheritance: Polymorphism

// Polymorphism is one of the core concepts in OOP. 
// Poly means many and morphism means forms. So polymorphism means - many forms.
// Below is an example of polymorphism where we used constructor functions to create both a Circle and a Square objects.
// Both of these objects is inheriting from shape.prototype to include the duplicate method.
// But also each object has its own duplicate method that is specific to the object. (overriding the parent duplicate method)
// This is polymorphism in action. (many forms of the duplicate method)

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {
}

// Original duplicate method [Form 1]
Shape.prototype.duplicate = function() {
    console.log('duplicate');
};

function Circle() {
}
extend(Circle, Shape);

// Overriding the duplicate method to impliment different functional logic or process [Form 2]
Circle.prototype.duplicate = function() {
    console.log('duplicate circle');
};

function Square() {

}

extend(Square, Shape);

// Overriding the duplicate method to impliment different functional logic or process [Form 3]
Square.prototype.duplicate = function() {
    console.log('duplicate square');
};

// An example of polymorphism's power can be seen in the below, where we define an array of the shapes
// and then iterate over each shape and call the duplicate method.
// Each shape will call its own duplicate method, not the parent duplicate method.
// Typically, to do this it would potentially involve a long or complex if-else statement to determine the shape type
// and to then call the appropriate method.
// but with polymorphism, we can simply call the duplicate method and the correct method will be called.
// And it is done with a single line of code "shape.duplicate();" in the for-of loop - where no further logic is needed. 

// define an array of shapes
const shapes = [
    new Circle(),
    new Square(),
];

// iterate over each shape and call the duplicate method
for (let shape of shapes) {
    shape.duplicate();
}