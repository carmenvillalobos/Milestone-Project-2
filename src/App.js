import NavBar from './Components/NavBar.jsx'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Components/Homepage.jsx';
import Task from './Components/Task.jsx'
import Form from './Components/Form.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage /> } />
          <Route path='/tasks' element={<Task /> } />
          <Route path='/tasks/monday-form' element={<Form /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
