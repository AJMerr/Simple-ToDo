import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"

function EditTask (props) {
    //Setting state
    const initialTaskState = {
        _id: '',
        title: '',
        created_by: '',
        description: '',
        __v: 0
    }

    //Passing in the ID to use params
    const { id } = useParams();

    const [singleTask, setSingleTask] = useState(initialTaskState)

    //API call to get a single task by ID
    const fetchSingleTask = (id) => {
        axios.get(`/api/tasks/${id}`)
        .then((res) => {
            setSingleTask(res.data)
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    useEffect(() => {
        fetchSingleTask(id)
    }, [id])

    const editTask = () => {
        axios.put(`/api/tasks/${id}`, singleTask)
        .then(res => {
            console.log(res.data)
            props.history.push("/")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const changeHandler = (e) => {
        const { name, value } = e.target
        setSingleTask({ ...singleTask, [name]: value })
    }
    
    return(
        <div>
            <h1>
                {singleTask.title}
            </h1>
            <form>
                <label>Title: </label>
                <input
                tpye="text"
                id="tite"
                name="title"
                value={singleTask.title}
                onChange={changeHandler}
                />

                <label>Created by: </label>
                <input
                tpye="text"
                id="created_by"
                name="created_by"
                value={singleTask.created_by}
                onChange={changeHandler}
                />

                <label>Title</label>
                <input
                tpye="text"
                id="description"
                name="description"
                value={singleTask.description}
                onChange={changeHandler}
                />
            </form>
            <button
            type="submit"
            onClick={editTask}>
                Edit
            </button>
        </div>
    )
}

export default EditTask