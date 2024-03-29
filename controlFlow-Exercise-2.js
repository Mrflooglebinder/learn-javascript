// Control Flow Exercise 2
// return true if is landscape (meaning it returns true if width > height) otherwise return false

let checkIsLandscape = isLandscape(800, 600);
console.log(checkIsLandscape);

function isLandscape(width, height) {
    return (width > height);
}