import './App.css';
import AllTasks from './components/AllTasks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <AllTasks />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
