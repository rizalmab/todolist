// import data from './todos.json'
const express = require('express')
const cors = require('cors')
const {getTodos} = require('./controllers/index.ts')

const app = express();
const port = 3000;

app.use(cors())

app.get("/todos", getTodos);

app.listen(port, () => {
  return console.log(`📳 Express is listening at http://localhost:${port}`);
});
