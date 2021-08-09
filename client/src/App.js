import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [taskList, setTasks] = useState([])
  
  useEffect(() => {
    axios.get("/api/tasks/").then((res) => {
      setTasks(res.data)
      console.log(res.data)
    })
  }, [])


  return (
    <div className="App">
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

export default App;
