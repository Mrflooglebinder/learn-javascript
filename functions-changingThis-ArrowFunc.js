// Functions: Changing This Keyword Using Arrow Functions

// Starting from ecmaScript 6, we can use the arrow function to change the value of 'this' within the forEach callback method.
// Arrow functions inherit 'this' value from their parent function.

const video = { 
    title: 'Back to the Future',
    tags: ['Action', 'Funny', 'SciFi'],
    showTags() {
        // Convert the below function to an arrow function, 
        // Do this by removing the 'function', removing the parenthesis from the 'tag' argument and adding the arrow '=>' 
        // Thats it...
        this.tags.forEach(tag => {
            console.log(this.title, '|',  tag);
        });
    } 
}

video.showTags();