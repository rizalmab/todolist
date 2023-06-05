import express from "express";
import data from './todos.json'
import cors from 'cors'

const app = express();
const port = 3000;

app.use(cors())

app.get("/todos", (req, res) => {
  res.status(200).json({data})
});

app.listen(port, () => {
  return console.log(`📳 Express is listening at http://localhost:${port}`);
});
