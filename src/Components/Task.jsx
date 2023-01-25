import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from './NavBar';
import Form from './Form';
import "./Task.css"

function Task() {
  return (
    <div>
        <NavBar/>
        <h1>Weekly To-Do List</h1>
        <NavBar></NavBar>
        <div className='grid'>
            <Card style={{ width: '18rem' }} className="box boxes">
            <Card.Body>
                <Card.Title>Monday</Card.Title>
                    <Link to="/tasks/form">
                    <Button 
                        variant="primary" 
                        size="sm" 
                        type='submit'>
                            Add Task
                    </Button>
                    </Link>
                <form action=""></form>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="box boxes">
            <Card.Body>
                <Card.Title>Tuesday</Card.Title>
                <Button variant="primary" size="sm">Add Task</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="box boxes">
            <Card.Body>
                <Card.Title>Wednesday</Card.Title>
                <Button variant="primary" size="sm">Add Task</Button>
            </Card.Body>
            </Card><Card style={{ width: '18rem' }} className="box boxes">
            <Card.Body>
                <Card.Title>Thursday</Card.Title>
                <Button variant="primary" size="sm">Add Task</Button>
            </Card.Body>
            </Card><Card style={{ width: '18rem' }} className="box boxes">
            <Card.Body>
                <Card.Title>Friday</Card.Title>
                <Button variant="primary" size="sm">Add A Goal</Button>
            </Card.Body>
            </Card><Card style={{ width: '18rem' }} className="box boxes">
            <Card.Body>
                <Card.Title>Saturday</Card.Title>
                <Button variant="primary" size="sm">Add Task</Button>
            </Card.Body>
            </Card><Card style={{ width: '18rem' }} className="box boxes">
            <Card.Body>
                <Card.Title>Sunday</Card.Title>
                <Button variant="primary" size="sm">Add Task</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="box boxes">
            <Card.Body>
                <Card.Title>Extra Tasks</Card.Title>
                <Button variant="primary" size="sm">Add Task</Button>
            </Card.Body>
            </Card>
        </div>
    </div>
  );
}

export default Task;