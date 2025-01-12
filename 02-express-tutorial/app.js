const express = require("express");
const app = express();

const people = require('./routes/people')
const auth = require('./routes/auth')


//static assets
app.use(express.static("./methods-public"));
//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json data
app.use(express.json());

app.use('/api/people', people)
app.use('/login', auth)



app.listen(3000, (req, res) => {
  console.log("server listens on port 3000");
});
