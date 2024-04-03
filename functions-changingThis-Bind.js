// Functions: Changing This Keyword Using Bind Method


// Using the Bind Method is another way to change the value of 'this' within the forEach callback method.
// But there is a more modern way to do this using the arrow function. (See next file)
const video = { 
    title: 'Back to the Future',
    tags: ['Action', 'Funny', 'SciFi'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, '|',  tag);
        }.bind(this));
    } 
}

video.showTags();