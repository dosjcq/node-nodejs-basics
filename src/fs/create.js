import {writeFile, stat} from "fs"
import path from 'path';
import { fileURLToPath } from 'url';

const content = "I am fresh and young"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    await stat(__dirname + "/files/fresh.txt", (error, stats) => {
        if (stats) throw "FS operation failed"
    })

    writeFile(__dirname + "/files/fresh.txt", content, err => {
        if (err) throw "FS operation failed"
    })
};

await create();