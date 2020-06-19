const express = require(`express`);
const mongoose = require(`mongoose`);
const PORT = require(`./config`).PORT;

const db = require(`./db`);
const server = express();

//middleware
server.use(express.json());

db();

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: false,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    }
})

const todoModel = mongoose.model(`todo`, todoSchema)

server.get("/todos", (req, res, next)=> {
    todoModel.find().then(todo => res.json(todo))
});

server.post("/todos", (req, res, next)=> {
    const newTodo = new todoModel({
        title: req.body.title
    })
    newTodo.save().then(todo => res.json(todo));
})

server.delete("/todos/:id", (req, res, next)=> {
    todoModel.findByIdAndDelete(req.params.id)
    .then(() => res.json({remove: true}))
});

server.listen(PORT, (err) => {
    if(err) {
        console.log(`Error starting server on port: ${PORT}`);
    }
    console.log(`Server listening on port: ${PORT}`)
});