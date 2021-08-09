import './App.css';
import AllTasks from './components/AllTasks';
import AddTask from './components/AddTask';
import SingleTask from './components/SingleTask';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <AllTasks />
          </Route>
          <Route exact path="/create">
            <AddTask />
          </Route>
          <Route exact path="/task/:id">
            <SingleTask />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
