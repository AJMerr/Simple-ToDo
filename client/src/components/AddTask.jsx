import React, { useState } from 'react';
import axios from 'axios';

function AddTask () {

    //Setting state
    const initialTaskState = {
        _id: '',
        title: "",
        created_by: "",
        description: "",
        __v: 0
    }

    const [task, setTask] = useState(initialTaskState)

    //Change handler to add a new task
    const changeHandler = e => {
        const { name, value } = e.target
        setTask({...task, [name]: value})
    }

    //Axios API call to create a new Task
    const createTask = (e) => {
        e.preventDefault()

        var data = {
            title: task.title,
            created_by: task.created_by,
            description: task.description
        }

        axios.post("/api/tasks", data).then((res) => {
            setTask({
                _id: res.data._id,
                title: res.data.title,
                created_by: res.data.created_by,
                description: res.data.description,
                __v: res.data.__v

            })
        })
    }

    return (
        <div>
            <form>
                <label>New Title: </label>
                <input
                type="text"
                id="title"
                value={task.title}
                onChange={changeHandler}
                name="title"
                />
                <label>Created by: </label>
                <input
                type="text"
                id="created_by"
                value={task.created_by}
                onChange={changeHandler}
                name="created_by"
                />
                <label>Description: </label>
                <input
                type="text"
                id="description"
                value={task.description}
                onChange={changeHandler}
                name="description"
                />
                <button onClick={createTask}>Submit</button>
            </form>
        </div>
    )
}

export default AddTask;