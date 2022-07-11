const express = require('express')
const path = require('path')
const app = express()

//setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
    //console.log(path)
res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})
app.all('*', (req, res) => {
    res.status(404).send('resurce not found')
})


app.listen(3000,  () => {
    console.log('server is running on a port 3000....')
})
