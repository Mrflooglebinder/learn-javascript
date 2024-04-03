// Functions: Changing the This Keyword Using Self Variable


// Another way to access 'this'from within the forEach method is to use a work around.
// by assigning 'this' to a variable called 'self' and then using 'self' to access the object properties.
// Not a recomended approach, but it works...
const video = { 
    title: 'Back to the Future',
    tags: ['Action', 'Funny', 'SciFi'],
    showTags() {
        const self = this;
        this.tags.forEach(function(tag) {
            console.log(self.title, '|',  tag);
        });
    } 
}

video.showTags();


function playVideo() {
    console.log(this);
}

playVideo.call({ name: 'Marty' }, 1, 2);

playVideo.apply({ name: 'Marty' }, [1, 2]);

const fn1 = playVideo.bind({ name: 'Marty' });
fn1();

playVideo.bind({ name: 'Marty' })();

 
playVideo();

