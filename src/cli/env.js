const parseEnv = () => {
    const rssArr = []
    const arrayOfEnvs = Object.entries(process.env)
    
    arrayOfEnvs.forEach(el => {
        if (el[0].startsWith('RSS_')) {
            rssArr.push(`${el[0]}=${el[1]}`)
        }
    })

    console.log(rssArr.join("; "));
};

parseEnv();