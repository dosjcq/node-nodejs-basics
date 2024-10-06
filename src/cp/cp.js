import { spawn } from 'child_process'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToChild = __dirname + '/files/script.js'

const spawnChildProcess = async (args) => {
    const myArguments = process.argv.slice(2);

    const child = spawn('node', [pathToChild, ...myArguments], {
        stdio: ['inherit', 'inherit', 'inherit', 'ipc']
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
