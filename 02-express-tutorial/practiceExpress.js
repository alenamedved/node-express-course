const express = require("express");
const app = express();
const consoleLog = require("./practice-middleware");

//setup static and middleware
app.use(express.static("./new-public"));

app.use(consoleLog);

app.get("/sample", (req, res) => {
  res.status(200).send("This is working");
});

// app.all('*', (req, res) => {
//     res.status(404).send('resurce not found')
// })

app.listen(3000, (req, res) => {
  console.log("server listens on port 3000...");
});
