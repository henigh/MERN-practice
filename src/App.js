import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Navbar} from 'reactstrap'

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
    <div className="App">
      {/* <Route path = "/" exact component = {ExercisesList} />
      <Route path = "/edit/:id" exact component = {EditExercise} />
      <Route path = "/create" exact component = {CreateExercise} />
      <Route path = "/user" exact component = {CreateUser} /> */}

    </div>
    </Router>
  );
}

export default App;
