// Arrays: Exercise 4

const numbers = [1, 2, 3, 4];
// console.log(numbers);

const output = move(numbers, 1, 1);

console.log(output);
// console.error('Index is out of array')

function move(array, index, offset) {
    const newArr = [...array];
    const newIndex = index + offset;
    moveNum = array[index];
    newArr.splice(index, 1);
    newArr.splice(newIndex, 0, moveNum);
    if (newIndex >= newArr.length || newIndex < 0) {
        console.error('Index ',index ,'is out of array');
        return;
    }
    return newArr;

}
