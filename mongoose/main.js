import mongoose from 'mongoose';
import express from "express";
import { Todo } from './models/Todo.js';

let a = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000

// const todo = new Todo();

app.get('/', (req, res) => {
  const todo = new Todo({title: "RemoteWork", desc: "Description of first todo", isDone: false})
  todo.save()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})