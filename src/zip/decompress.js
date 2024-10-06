import { createReadStream, createWriteStream } from 'fs'
import { createUnzip } from 'zlib'

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const decompress = async () => {
    const decompressStream = createReadStream(__dirname + '//files/archive.gz');
    const writeFileStream = createWriteStream(__dirname + '//files/fileToCompress.txt');
    decompressStream.pipe(createUnzip()).pipe(writeFileStream);
};

decompress()