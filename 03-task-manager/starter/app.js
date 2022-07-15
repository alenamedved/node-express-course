const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

const connectDB = require("./db/connect");
require('dotenv').config()
//middleware
app.use(express.json());

//routs
app.get("/hello", (req, res) => {
  res.send("Task manager app");
});

app.use("/api/v1/tasks", tasks);

//app.get('/api/v1/tasks')  - get all the tasks
//app.post('/api/v1/tasks')  - create a new task
//app.get('/api/v1/tasks/:id')  - get single task
//app.patch('/api/v1/tasks/:id')  - update single task
//app.delete('/api/v1/tasks/:id')  - delete a single task

const port = 3000;

const start = async () => {
  try {
    //start the server only if connection to db was established
    await connectDB(process.env.MONGO_URI);

    app.listen(port, (req, res) => {
      console.log(`server listens on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
