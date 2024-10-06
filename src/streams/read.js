import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const stream = createReadStream(__dirname + '/files/fileToRead.txt');
    stream.on('data', (chunk) => {
        process.stdout.write(chunk)
    }); 
};

await read();