import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"

function SingleTask (props) {
    //Setting state
    const initialTaskState = {
        _id: "",
        title: "",
        created_by: "",
        description: "",
        __v: 0
    }
    const { id } = useParams();

    const [singleTask, setTask] = useState(initialTaskState)

    //Axios GEt request to pull by ID from the DB
    const fetchSingTask = (id) => {
        axios.get(`/api/tasks/${id}`)
        .then((res) => {
            setTask(res.data)
            console.log(res.data)
        })
        .catch (err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchSingTask(id)
    }, [id]) 

    return(
        <div>
            <h1>
                {singleTask.title}
            </h1>
            <h2>
                {singleTask.created_by}
            </h2>
            <p>
                {singleTask.description}
            </p>
        </div>
    )
}

export default SingleTask;