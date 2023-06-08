require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {getTodos, getTodo, createTodo} = require('./controllers/index.ts')

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get("/todos", getTodos);
app.get("/todo/:id", getTodo)
app.post("/todo", createTodo)

app.listen(port, () => {
  return console.log(`📳 Express is listening at http://localhost:${port}`);
});
