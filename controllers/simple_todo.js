const express = require("express")

//Imports Task model API
const taskApi = require("../models/simple_todo.js")

//Creates an express router
const taskRouter = express.Router()

//Gets all Tasks 
taskRouter.get("/tasks", (req, res) => {
    taskApi,getAllTasks()
    .then(allTasks) => {
        res.json(allTasks)
    }
})

//Gets a single task
taskRouter.get("/tasks/:id", (req, res) => {
    taskApi.getOneTask(req.params.id)
    .then((oneTask) => {
        res.json(oneTask)
    })
})

//Creates a task
taskRouter.post("/tasks", (req, res) =>{
    taskApi.createTask(req.body)
    .then((newTask) => {
        res.json(newTask)
    })
})

//Updates a single task
taskRouter.put("/tasks/:id", (req, res) => {
    taskApi.editTask(req.params.id, req.body)
    .then((editedTask) => {
        res.json(editedTask)
    })
})

//Delets a single task
taskRouter.delete("/tasks/:id", (req, res) => {
    taskApi.deleteTask(req.params.id)
    .then((deletedTask) =>{
        res.json(deletedTask)
    })
})

module.exports = {
    taskRouter
}