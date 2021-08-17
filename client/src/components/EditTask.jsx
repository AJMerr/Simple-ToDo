import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"
import { Typography, AppBar, CssBaseline, Grid, Toolbar, Container, Button, InputLabel } from "@material-ui/core"
import ListIcon from '@material-ui/icons/List';
import Input from '@material-ui/core/Input';
import { Link as RouterLink } from "react-router-dom"

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
                <Container maxWidth="sm">
                    <Typography variant="h3" align="center" color="textPrimary" gutterBottom>Your Task</Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    This page allows you to edit your task. Once you hit submit, return home!
                    </Typography>
                </Container>
            </div>
            <div>
                <Container maxWidth="md">
                <form>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item>
                            <InputLabel>New Title: </InputLabel>
                            <Input
                             type="text"
                            id="title"
                            value={singleTask.title}
                            onChange={changeHandler}
                            name="title"
                            />
                            <InputLabel>Created by: </InputLabel>
                            <Input
                            type="text"
                            id="created_by"
                            value={singleTask.created_by}
                            onChange={changeHandler}
                            name="created_by"
                            />
                            <InputLabel>Description: </InputLabel>
                            <Input
                            type="text"
                            id="description"
                            value={singleTask.description}
                            onChange={changeHandler}
                            name="description"
                            />
                            <Button color="primary" onClick={editTask}>Submit</Button>
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

export default EditTask