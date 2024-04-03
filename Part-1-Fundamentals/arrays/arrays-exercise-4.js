// Arrays: Exercise 4

const numbers = [1, 2, 3, 4];
// console.log(numbers);

const output = move(numbers, 1, 1);

console.log(output);
// console.error('Index is out of array')

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Index ',index ,'is out of array');
        return;
    }
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;

}
