const {createReadStream} = require('fs')

const stream = createReadStream('./content/bit.txt')

//default 64kb
//last buffet - remainder
//highWaterMark - control size
//const stream = createReadStream('./content/bit.txt', { highWaterMark: 90000})
//const stream = createReadStream('../content/bit.txt', { encoding: 'utf8})


stream.on('data', (result) => {
console.log(result)
console.log(result.length)
})
stream.on('error', (err)=> {console.log(err)})