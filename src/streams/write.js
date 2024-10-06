import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const stream = createWriteStream(__dirname + '/files/fileToWrite.txt',)
    process.stdin.on('data', data => {
        stream.write(data.toString());
        process.exit();
    });
};

await write();