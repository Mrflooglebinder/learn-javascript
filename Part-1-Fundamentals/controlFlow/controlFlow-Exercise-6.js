// Control Flow Exercise 6

// Count truthy elements in an array

const items = [0, null, undefined, '', 2, 3, 4, 5, 6, 'hello', 'falsey'];

function countTruthy(items) {
    let count = 0;
    for (let item of items){
        // below is checking if the item is truthy and if it is, it will increment the count
        if (item) count++;
    }
    return count;
}
console.log(countTruthy(items));