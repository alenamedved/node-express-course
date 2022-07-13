const express = require('express')
const app = express()
//req => middleware => res

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    //res.send('testing')
    next()
}

app.get('/', logger, (req,res)=> {
    res.send('home')
})

app.get('/about', (req,res)=> {
    res.send('about page')
})


app.listen(3000, (req,res) => {
    console.log('server listens on port 3000')
})