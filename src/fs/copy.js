import {readdir, mkdir, copyFile} from "fs"
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    
    await readdir(__dirname + "/files", async (err, res) => {
        if (err) throw 'FS operation failed'

        await mkdir(__dirname + '/files_copy', err => {
            if (err) throw 'FS operation failed'
        })

        for (let i = 0; i < res.length; i++) {
            copyFile(`${__dirname}/files/${res[i]}`, `${__dirname}/files_copy/${res[i]}`, err => {
                if (err) throw 'FS operation failed'
            })
        }
    })
};

await copy();
