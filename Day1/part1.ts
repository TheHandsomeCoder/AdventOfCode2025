import * as FileReader from 'fs';
const inputOne = FileReader.readFileSync('./input1.txt', 'utf-8').split('\n').map(String);

const MAX_RANGE = 100;

let total = 50;
let zeroCount = 0;

for (let i = 0; i < inputOne.length; i++) {
    const direction = inputOne[i][0];
    let value = Number(inputOne[i].slice(1));
    if(direction === 'L'){
        value *= -1; //Invert it so we can use the same wrap function
    }
    // use the magic of modulo to wrap around the range.
    total = (total + MAX_RANGE + value) % MAX_RANGE
    if(total === 0) {
        zeroCount += 1;
    }
}
console.log(zeroCount);
