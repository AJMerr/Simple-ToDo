import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SingleTask (props) {
    //Setting state
    const initialTaskState = {
        _id: "",
        title: "",
        created_by: "",
        description: "",
        __v: 0
    }

    const [singleTask, setTask] = useState(initialTaskState)

    //Axios GEt request to pull by ID from the DB

    const fetchSingTask = (id) => {
        axios.get(`/api/tasks/${id}`, id)
        .then((res) => {
            setTask(res.data)
            console.log(res.data)
        })
        .catch (err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchSingTask(props.match.params.id)
    }, [props.match.params.id]) 

    return(
        <div>
            <p>
                {singleTask}
            </p>
        </div>
    )
}

export default SingleTask;