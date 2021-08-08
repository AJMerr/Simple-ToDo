const mongoose = require("./connection.js")

//Schema for adding a new ToDo item
const TaskSchema = new.mongoose.Schema({
    title: '',
    created_by: '',
    description: ''
})

//Collection for the Schema
const TaskCollection = mongoose.model("simple_todo", TaskSchema)

//Gets all tasks
const getAllTasks = () => {
    return TaskCollection.find()
}

//Gets a single task
const getOneTask = (taskId) => {
    return TaskCollection.findById(taskId)
}

//Creates a new task
const createTask = (newTask) => {
    return TaskCollection.create(newTask)
}

//Edit a single task
const editTask = (taskId, updatedTask) => {
    return TaskCollection.updateOne({_id: taskId}, updatedTask)
}

//Deletes a single task
const deleteTask = (taskId) => {
    return TaskCollection.deleteOne({_id: taskId})
}

//Exoirts all functions 
module.exports = {
    getAllTasks,
    getOneTask,
    createTask,
    editTask,
    deleteTask
}