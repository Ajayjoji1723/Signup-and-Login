import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Student from './components/Student';
import Employee from './components/Employee';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

import './App.css';

const App =()=>{
  return(
    <Router>
      <Routes>
        <Route exact path = "/" element={<Home/>}/>
        <Route exact path = "/register" element={<Register/>}/>
        <Route exact path = "/login" element={<Login/>}/>
        <Route exact path = "/student" element={<Student/>}/>
        <Route exact path = "/employee" element={<Employee/>}/>
      </Routes>
    </Router>
    
  )
}
export default App;
