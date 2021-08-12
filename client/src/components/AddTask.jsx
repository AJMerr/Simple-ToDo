import React, { useState } from 'react';
import axios from 'axios';
import { Typography, AppBar, Card, CardActions, CardContent, CssBaseline, Grid, Toolbar, Container, Button, InputLabel } from "@material-ui/core"
import ListIcon from '@material-ui/icons/List';
import Input from '@material-ui/core/Input';
import { Link as RouterLink } from "react-router-dom"

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
        <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <ListIcon  />
            <Typography>Simple ToDo</Typography>
          </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth="md">
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Create a Task</Typography>
                    <form>
                        <Grid container spacing="10" justifyContent="center">
                            <Grid item>
                                <InputLabel>New Title: </InputLabel>
                                <Input
                                type="text"
                                id="title"
                                value={task.title}
                                onChange={changeHandler}
                                name="title"
                                />
                                <InputLabel>Created by: </InputLabel>
                                <Input
                                type="text"
                                id="created_by"
                                value={task.created_by}
                                onChange={changeHandler}
                                name="created_by"
                                />
                                <InputLabel>Description: </InputLabel>
                                <Input
                                type="text"
                                id="description"
                                value={task.description}
                                onChange={changeHandler}
                                name="description"
                                />
                                <Button color="primary" onClick={createTask}>Submit</Button>
                                <Button color="primary" component={RouterLink} to="/">Home</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </div>
        </main>
        </>
    )
}

export default AddTask;