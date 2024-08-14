const fs = require('fs')
const process = require('process')
const axios = require('axios')
function cat(path){
fs.readFile(path, 'utf8', (err,data) => {
    if (err){
        console.error(`Error reading ${path}`, err)
        process.exit(1)
    }
    console.log("Data...", data)
})
}

async function webcat(url){
    try{
    resp = await axios.get(url)
    console.log(resp.data)
    }
    catch{
        console.error(`Error fetching ${url}: ${err}`)
        process.exit(1)
    }
}

if (process.argv[2].slice(0,4) === 'http'){
    webcat(process.argv[2])

}
else{
    cat(process.argv[2])
}
