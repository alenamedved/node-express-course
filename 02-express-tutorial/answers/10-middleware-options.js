const express = require("express");
const app = express();
const morgan = require('morgan')


//req => middleware => res

//1. use vs route
//2. options - our own / express / third party
const logger = require("./logger");
const authorize = require("./authorize");

//app.use([logger, authorize]);
//app.use(express.static('./public'))
app.use(morgan('tiny'))


app.get("/", (req, res) => {
  res.send("home");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/api/products", (req, res) => {
  res.send("products page");
});
app.get("/api/items", (req, res) => {
  res.send("items page");
});

app.listen(3000, (req, res) => {
  console.log("server listens on port 3000");
});
