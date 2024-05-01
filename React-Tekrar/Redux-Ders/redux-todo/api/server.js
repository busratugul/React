const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

let todos = [
  {
    id: nanoid(),
    content: 'React Çalış',
    completed: true,
  },
  {
    id: nanoid(),
    content: 'Oyun Oyna',
    completed: false,
  },
  {
    id: nanoid(),
    content: 'Çiçekleri Sula',
    completed: false,
  },
  {
    id: nanoid(),
    content: 'Kedilere mama ve kum ısmarla',
    completed: false,
  },
  {
    id: nanoid(),
    content: 'Akşam arkadaşlarla yemek',
    completed: false,
  },
];
//todoların hepsini döner
app.get('/todos', (req, res) => res.send(todos));
//todo ekler
app.post('/todos', (req, res) => {
  const todo = { content: req.body.content, id: nanoid(), completed: false };
  todos.push(todo);
  return res.send(todo);
});
//todo completed yapar
app.patch('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  const completed = Boolean(req.body.completed);
  if (index > -1) {
    todos[index].completed = completed;
  }
  return res.send(todos[index]);
});
//todo siler
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  if (index > -1) {
    todos.splice(index, 1);
  }

  res.send(todos);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));