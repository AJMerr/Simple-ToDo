import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, AppBar, Card, CardActions, CardContent, CssBaseline, Grid, Toolbar, Container, Button } from "@material-ui/core"
import ListIcon from '@material-ui/icons/List';
import { Link as RouterLink } from "react-router-dom"

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
      <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <ListIcon />
          <Typography>Simple ToDo</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h1" align="center" color="textPrimary" gutterBottom>All Tasks</Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              This is a simple ToDo webapp built using the MERN Stack and my first test utilizing React Hooks
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary" component={RouterLink} to="/create">
                    Create a task
                  </Button>
                </Grid>
              </Grid>
            </div>
        </Container>
        </div>
        <Container maxWidth="md">
        <div> {taskList.map((val, key) => {
          return <div>
          <Grid container spacing={4}>
            <Grid item>
              <Card>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" gutterBottom>
                    {val.title}
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    {val.created_by}
                  </Typography>
                  <Typography variant="h6" color="textPrimary" paragraph>
                    {val.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          </div>
        })} </div>
        </Container>
      </main>
      </>
    );
}

export default AllTasks;