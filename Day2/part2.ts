import * as FileReader from 'fs';
import * as path from 'path';
type Range = [number, number];

const input: Range[] = FileReader.readFileSync(path.join(__dirname, 'input1.txt'), 'utf-8')
    .split(',')
    .map(line => {
        const [start, end] = line.split('-').map(Number);
        return [start, end] as Range;
    });

function hasRepeatingPattern(num: number): boolean {
    const s = num.toString();
    
    for (let patternLen = 1; patternLen <= s.length / 2; patternLen++) {
        if (s.length % patternLen === 0) {
            const pattern = s.slice(0, patternLen);
            const repeats = s.length / patternLen;
            if (pattern.repeat(repeats) === s) {
                return true;
            }
        }
    }
    return false;
}

let count = 0;

for (let i = 0; i < input.length; i++) {
    const [start, end] = input[i];

    for (let j = start; j <= end; j++) {
        if (hasRepeatingPattern(j)) {
            count += j;
        }
    }
}
console.log(count);