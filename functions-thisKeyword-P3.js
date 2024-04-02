// Functions: This Keyword - Part 3 - Cleaned up...

// The 'this' Keyword is refering the object that is executing the current function.
// But... the 'this' in the 2nd parameter of the forEach method is needed if you want to use the 'this.title' in the console.log statement.
// Else, it will reference the global object.  -- more details on previous files.

const video = { 
    title: 'Back to the Future',
    tags: ['Action', 'Funny', 'SciFi'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    } 
}

video.showTags();