import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
   const stream = createReadStream(__dirname + '/files/fileToCalculateHashFor.txt',);
   stream.on('data', (chunk) => {
    let hash = createHash('sha256').update(chunk).digest('hex');
    console.log(hash)
  }); 
};

await calculateHash();