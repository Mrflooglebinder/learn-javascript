# learn-javascript

This repo is to capture my notes while taking a Javascript course called `The Ultimate JavaScript Mastery Series` - `Part 1` and `Part 2` by [`Code with Mosh`](https://codewithmosh.com/).  
Mixed with some additional notes from self learning & other sources.

## The Ultimate JavaScript Mastery Series - `Part 2`

## Table of Contents

## Getting Started

### Four Pillars of OOP (Object Oriented Programming)

Before OOP, we had `procedural programming`, that devided a program into a set of functions. Such as:  
Data, stored in variables and functions that operate on this data. In procedural programming, we write code in a sequence of steps.  

These steps are typically a series of instructions that are executed one after the other. This style of programming is very simple and straightforward. Often this is the first style of programming that people tend to learn.  

As your programming & your programs grow, in complexity & size, it becomes harder & harder to manage, with many functions and variables that rely on one another. This can become quite problematic to manage, as one change to a function, can have a ripple effect on other functions.  

**This is where `'OOP'` shines**:  
In OOP, we combine a group of related variables and functions into buckets to contain them, we call these buckets `objects`.
In these `Objects`, we refer to the variables as `properties` and the functions as `methods`.  
This allows us to organize our code in a more structured way, making it easier to manage and maintain.

As an example, we could define an object called `vehicle`, this object could have:  
Properties Such as - `color`, `make`, `model`, `year`, `body type`, `rego number`.  
Methods Such as - `start`, `stop`, `drive`.  

* **Encapsulation**  

    Encapsulation is the bundling of data (properties) and the methods that operate on that data (methods) into a single unit.
    This single unit is called an object.  
    One of the issues is that we often use a lot of parameters in our functions.  
    In OOP, we can group these highly related variables and functions into a single object and then we can pass this object around our code.  
    When you write code in OOP, you end up with fewer parameters in your functions.  

> "***The best functions are those with no parameters***!"  
> Uncle Bob - Robert C Martin  

* **Abstraction**  
  
    Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of an object. So we can hide some of the properties and methods of an object and only show the essentials, this is benificial because..
  * Makes the interface of those objects simpler.  
  * Reduces the impact of change.  
    Example, when you drive a car, you don't need to know how the engine works, you just need to know how to drive the car.  

* **Inheritance**  
Inheritance is a mechanism that allows you to eliminate redundant code.  
Such as, if you have a `vehicle` object and you want to create a `car` object, or a `truck` object, you can inherit the properties and methods of the `vehicle` object that contains all the common properties and methods discussed earlier.

* **Polymorphism**  
Polymorphism means many forms.  
Poly: means `many`  
Morph: means `form(s)`  

Polymorphism allows us to treat objects of a derived class as objects of a base class.
This is useful because it allows us to write code that doesn't depend on the specific type of an object. This makes our code more flexible and extensible.  

## Setting up the Development Environment

* Text editor: VS Code
  * Extention(s): Prettier - Code formatter  
  * Live Server: To run the code in the browser  

