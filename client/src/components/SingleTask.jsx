import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"
import { Typography, AppBar, Card, CardActions, CardContent, CssBaseline, Grid, Toolbar, Container, Button } from "@material-ui/core"
import ListIcon from '@material-ui/icons/List';
import { Link as RouterLink } from "react-router-dom"

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
        })
        .catch (err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchSingTask(id)
    }, [id])

    // const changeHandler = (e) => {
    //    const { name, value } = e.target
      //  setTask({...singleTask, [name]: value})
   // }
 
    const deleteTask = () => (
        axios.delete(`/api/tasks/${id}`)
        .then(res => {
            console.log(res.data)
            props.history.push("/")
        })
        .catch(err => {
            console.log(err)
        })
    )

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
                    This page displays your single task. You can view it, edit it, or delete it. Once pressing delete, return to the home page.
                    </Typography>
                </Container>
                </div>
                <div>
                    <Container maxWidth="md">
                    <Grid container spacing={4} justifyContent="center">
                    <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" color="textPrimary" gutterBottom>
                                {singleTask.title}
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                                {singleTask.created_by}
                            </Typography>
                            <Typography variant="h6" color="textPrimary" paragraph>
                                {singleTask.description}    
                            </Typography>
                        </CardContent>
                    </Card>
                    <Button onClick={deleteTask}>Delete</Button>
                    <Button color="primary" component={RouterLink} to={`../task/edit/${id}`}>edit</Button>
                    <Button color="primary" component={RouterLink} to="/">Home</Button>
                    </Grid>
                    </Grid>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default SingleTask;