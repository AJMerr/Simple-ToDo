import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllTasks () {

    //Setting state
    const [taskList, setTasks] = useState([])

    //Axios GEt request to pull from the DB
    useEffect(() => {
      axios.get("/api/tasks/").then((res) => {
        setTasks(res.data)
        console.log(res.data)
      })
    }, [])
  
  
    return (
      <div>
        <div> {taskList.map((val, key) => {
          return <div>
            <h1>
            {val.title}
            </h1>
            <h2>
              {val.created_by}
            </h2>
            <o>
              {val.description}
            </o>
          </div>
        })} </div>
      </div>
    );
}

export default AllTasks;