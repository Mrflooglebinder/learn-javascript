// Functions: This Keyword - Part 2

// The 'this' Keyword is refering the object that is executing the current function.

// Rule of Thumb:
// method -> object
// function -> global (window, global)

const video = { 
    title: 'Back to the Future',
    tags: ['Action', 'Funny', 'SciFi'],
    showTags() {
        // 'this' is referencing the video object - so it returns the tags array.
        this.tags.forEach(function(tag) {
            console.log(tag);
        });
    } 
}

video.showTags();


const video2 = { 
    title: 'Back to the Future',
    tags: ['Action', 'Funny', 'SciFi'],
    showTags() {
        // 'this' is referencing the video object - so it returns the tags array.
        this.tags.forEach(function(tag) {
            // however, if we want to access the title property of the video object, it cant be done with 'this' keyword.
            // because 'this' resides inside the function and it references the global object.
            console.log(this.title, tag);  // Switch commenting out with the below line to see that it is displaying the window object.
            // console.log(this, tag);  // Switch commenting out with the above line to see that it is displaying the window object.
        });
    } 
}

video2.showTags();


const video3 = { 
    title: 'Back to the Future',
    tags: ['Action', 'Funny', 'SciFi'],
    showTags() {
        // 'this' is referencing the video object - so it returns the tags array.
        this.tags.forEach(function(tag) {
            // to fix the above issue, we can use the bind method.
            
            console.log(this.title, tag);
            // console.log(this, tag);  // Switch commenting out with the above line to see the video object.

            // By setting 'this' in the 2nd argument of the forEach method to 'this', 
            // When we do,we are telling the forEach method to use 'this' as the reference to the video object.
        }, this);
    } 
}

video3.showTags();