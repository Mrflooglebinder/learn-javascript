// Functions: This Keyword

// The 'this' Keyword is refering the object that is executing the current function.

// Rule of Thumbs:

// method -> object
// if the function is part of an object, we call that function a method.
// So if that function is a method in an object, 'this' references that object itself.

// function -> global (window, global)
// If the function is a regular function, then 'this' references the global object.
// this references the global object, which is the 
// ---> window object in the browser & 
// ---> global object in Node.js.

// below is a simple example of the 'this' keyword used in a method.
const video = { // from this curly brace to.....
    title: 'a',
    play() {
        console.log(this); // this references the video object above and below...
    }
}; // this curly brace.....

// in the below: 'this' references the video object.
video.stop = function() {
    console.log(this); 
};

// in the below: 'this' references the global object.
// the 'this' keyword is referencing the global window object in the browser.
function playVideo() {
    console.log(this); // this references the global object.
}


function Video(title) {
    this.title = title;
    console.log(this);
}


// The 'new' keyword creates an empty object and then it will set 'this' to point to that object.
const v = new Video('Back to the Future');

video.play();
video.stop();
playVideo();
Video();