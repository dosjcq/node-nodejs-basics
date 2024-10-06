import { Transform } from 'node:stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            const reversedData = chunk.toString().split("").reverse().join("");
            this.push(reversedData);
        },
    });

    process.stdin.pipe(transformStream).on('data', data => {
        process.stdout.write(data.toString())
        process.exit();
    });
};

await transform();