const parseArgs = () => {
    const userArgs = process.argv.slice(2)

    let res = []

    for (let i = 0; i < userArgs.length; i++) {
        if (i % 2 === 0) {
            res.push(`${userArgs[i].slice(2)} is ${userArgs[i + 1]}`);
        }
    }

    console.log(res.join(', '))
};

parseArgs();