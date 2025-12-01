import * as FileReader from 'fs';
const inputOne = FileReader.readFileSync('./input1.txt', 'utf-8').split('\n').map(String);

const MAX_RANGE = 100;

let total = 50;
let zeroCount = 0;

for (let i = 0; i < inputOne.length; i++) {
    const direction = inputOne[i][0];
    let value = Number(inputOne[i].slice(1));
    
    // Calculate full rotations and remainder
    const fullRotations = Math.floor(value / MAX_RANGE);
    const remainder = value - (fullRotations * MAX_RANGE);
    zeroCount += fullRotations;
    
    // Apply direction to remainder
    const directionModifier = direction === 'L' ? -1 : 1;
    const updatedTotal = total + (directionModifier * remainder);
    
    // Check if remainder movement crosses zero
    let crossedZero = false;
    if (total !== 0 && (updatedTotal <= 0 || updatedTotal > 99)) {
        zeroCount += 1;
        crossedZero = true;
    }
    
    // use the magic of modulo to wrap around the range.
    total = ((updatedTotal % MAX_RANGE) + MAX_RANGE) % MAX_RANGE;
    // Only count landing on zero if we didn't already count it crossing
    if(total === 0 && !crossedZero) {
        zeroCount += 1;
    }
}
console.log(zeroCount);