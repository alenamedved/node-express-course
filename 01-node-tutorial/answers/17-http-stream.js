let http = require('http')

let fs = require('fs')

http.createServer(function (req, res)  {
    // const text = fs.readFileSync('./content/bit.txt', 'utf8')
    // res.end(text)

    const fileStream = fs.createReadStream('./content/bit.txt', 'utf8')
    fileStream.on('open', ()=> {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        req.end(err)
    })
}).listen(3000)