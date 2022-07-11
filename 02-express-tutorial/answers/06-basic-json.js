const express = require('express')
const app = express()

const {products} = require('./data')


app.get('/', (req,res) => {
    res.json(products)
})

app.listen(3000, (req, res) => {
    console.log('server is listening on 3000 port...')
})