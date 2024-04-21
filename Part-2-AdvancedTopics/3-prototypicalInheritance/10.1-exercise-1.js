// Prototype Inheritance: Exercise 1 Prototypical Inheritance - Part 2

// Building on from the previous exercise

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
  
//   HtmlSelectElement.prototype = Object.create(HtmlElement.prototype); 
  
  
  // However, if we use `new` HtmlElement() to set the prototype of HtmlSelectElement, we're doing two things:
  
  // Inheriting HtmlElement's Prototype: 
  // This allows HtmlSelectElement instances to use methods defined on HtmlElement.prototype, such as focus.
  
  // Executing the HtmlElement Constructor: 
  // This is the crucial part that differs from Object.create 
  // By using `new` HtmlElement(), the constructor function of HtmlElement is called, 
  // and the click method is added directly to the object that becomes the prototype of HtmlSelectElement. 
  // This means all instances of HtmlSelectElement now have access to the click method because it's found on their prototype chain (specifically, their immediate prototype).
  
  HtmlSelectElement.prototype = new HtmlElement();
  HtmlSelectElement.prototype.constructor = HtmlSelectElement;
  
  const s = new HtmlSelectElement()
  console.log(s);
  
  s.focus();
  s.click();