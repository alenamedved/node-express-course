const sentence = require('./practice2')

const os = require('os')
const fs = require('fs')

fs.writeFile('./content/practice.txt', "Hello. It is my additional Assignment1 by", (err, result) => {
    if(err) {
        console.log(err);
    }
    fs.writeFile('./content/practice.txt', ` ${os.userInfo().username}`, {flag: 'a'}, (err, result) => {
        if(err) {
            console.log(err)
        }
        console.log('done with a task')
    })
    console.log(os.userInfo().username)
})