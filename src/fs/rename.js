import fs from "fs"
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    fs.rename(__dirname + '/files/wrongFilename.txt', __dirname + '/files/properFilename.txt',
        (err) => {
            if (err) throw err
        });
};

await rename();