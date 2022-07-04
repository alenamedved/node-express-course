const fs = require('fs').promises

const makeFile = async () => {
    try {
        for( let i = 0; i < 11; i++) {
           await fs.writeFile('./content/practice2.txt', `This is the line ${i}\n`, {flag: 'a'})
        }

    } catch (err) {
        console.log(err)
    }
}

makeFile()