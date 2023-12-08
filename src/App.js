import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

//function component
function App() {
  return (
  <div> 
    <Navbar/>
    <Routes>  
          <Route path="/" exact Component={ExercisesList} />
          {/* CreateExercise component will allow us to add exercises data into the database */}
          <Route path="/create" Component={CreateExercise} />   
          <Route path="/user" Component={CreateUser} />
      </Routes>
  </div> 
  );
}

export default App;
