import './App.css';
import AllTasks from './components/AllTasks';
import AddTask from './components/AddTask';
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
        </Switch>
      </div>
    </Router>
  )
}

export default App;
