const express = require('express')
const app = express()
//req => middleware => res
const logger = require('./logger')
const authorize = require('./authorize')

app.use([logger, authorize])

app.get('/',  (req,res)=> {
    res.send('home')
})

app.get('/about', (req,res)=> {
    res.send('about page')
})

app.get('/api/products', (req,res)=> {
    res.send('products page')
})
app.get('/api/items', (req,res)=> {
    res.send('items page')
})

app.listen(3000, (req,res) => {
    console.log('server listens on port 3000')
})