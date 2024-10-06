import { createReadStream, createWriteStream } from 'fs'
import { createGzip } from 'zlib'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const compress = async () => {
    const readFileToCompressStream = createReadStream(__dirname + '/files/fileToCompress.txt');
    const writeFileToCompressStream = createWriteStream(__dirname + '/files/archive.gz');

    readFileToCompressStream.pipe(createGzip()).pipe(writeFileToCompressStream);
};

compress()