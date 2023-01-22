import NavBar from './Components/NavBar.jsx'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Components/Homepage.jsx';
import Task from './Components/Task.jsx'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Homepage/>
      {/* <Task/> */}
    </div>
  );
}

export default App;
