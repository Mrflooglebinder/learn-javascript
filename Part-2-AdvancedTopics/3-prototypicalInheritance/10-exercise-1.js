// Prototype Inheritance: Exercise 1 Prototypical Inheritance - Part 1

function HtmlElement() {
  this.click = function() {
    console.log('clicked');
  }
};

HtmlElement.prototype.focus = function() {
    console.log('focused');
}

function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}

// When using Object.create(HtmlElement.prototype) to set the prototype of HtmlSelectElement. 
// This correctly sets up the prototype chain so that methods defined on HtmlElement.prototype (like focus) are available to instances of HtmlSelectElement.
// However, this does not involve the HtmlElement constructor function itself. 
// The constructor is not called when the HtmlSelectElement is instantiated, which means any properties that should be initialized by the HtmlElement constructor are not set up.
// In this case, the HtmlElement constructor adds a click method to the instance (not the prototype), and since the constructor is not called, 
// HtmlSelectElement instances do not get the click method.

HtmlSelectElement.prototype = Object.create(HtmlElement.prototype); 

const s = new HtmlSelectElement()
console.log(s);

s.focus();
s.click();