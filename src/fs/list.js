import {readdir} from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    readdir(__dirname + '/files', (error, res) => {
        if (error) throw "FS operation failed"

        console.log(res)
    }) 
};

await list();