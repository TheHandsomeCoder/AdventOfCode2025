import * as FileReader from 'fs';
import * as path from 'path';
type Range = [number, number];

const input: Range[] = FileReader.readFileSync(path.join(__dirname, 'input1.txt'), 'utf-8')
    .split(',')
    .map(line => {
        const [start, end] = line.split('-').map(Number);
        return [start, end] as Range;
    });

let count = 0;

for (let i = 0; i < input.length; i++) {
    const [start, end] = input[i];

    for (let j = start; j <= end; j++) {
        const s = j.toString();
        if (s.length % 2 === 0) {
            const mid = s.length / 2;
            const firstHalf = s.slice(0, mid);
            const secondHalf = s.slice(mid);
            if (firstHalf === secondHalf) {
                count+= Number(j);
            }
        }
    }
}
console.log(count);