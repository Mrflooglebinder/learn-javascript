// Objects Exercise 4 
// Create a blog post using object using Object Literal Syntax.
// Object should have the following properties:
// title
// body
// author
// views
// comments
// (author, body)
// isLive

function blogPost(title, body, author) {
    return {
        title: title,
        body: body,
        author: author,
        views: 12,
        comments: [
            { author: 'a', body: 'b' },
            { author: 'c', body: 'd' },
        ],
        isLive: true
    }
}

let post = blogPost('a', 'b', 'c');

console.log(post);
