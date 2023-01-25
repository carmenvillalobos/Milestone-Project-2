import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Task.css"
import ProgressBar from './Progress';
import NavBar from './NavBar';

const testData = [
    { bgcolor: "blue", completed: 60 },]

function Task() {
  return (
    <div>
        <NavBar/>
        <h1>Weekly To-Do List</h1>
        <div>
            <h5 className="pro">Your Progress Bar</h5>
            {testData.map((item, idx) => (
            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
            ))}
        </div>
        {/* <div className='grid'>
            <Card style={{ width: '18rem' }} className="box boxes">
                <Card.Body>
                    <Card.Title> Monday</Card.Title>
                    <a href="/form">
                        <Button variant="primary" size="sm" type='submit'>Add A Goal</Button>
                    </a>
                </Card.Body>
            </Card>
        </div> */}
    </div>
  );
}

export default Task;