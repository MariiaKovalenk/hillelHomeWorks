const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Todo = require('./models/Todo');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todos', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected'))
    .catch(err => console.error(err));

app.get('/todos', async (req, res) => res.json(await Todo.find()));
app.post('/todos', async (req, res) => res.status(201).json(await new Todo(req.body).save()));
app.put('/todos/:id', async (req, res) => res.json(await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true }) || { error: 'Not found' }));
app.delete('/todos/:id', async (req, res) => res.json(await Todo.findByIdAndDelete(req.params.id) ? { message: 'Deleted' } : { error: 'Not found' }));

app.listen(PORT, () => console.log(`Server on ${PORT}`));