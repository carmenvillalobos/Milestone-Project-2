import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from './NavBar';
import Form from './Form';
import "./Task.css"
import {useEffect, useState} from 'react'

function Task() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/api/tasks')
            const resData = await response.json()
            setTasks(resData)
        }
        fetchData()
    }, [])
  return (
    <div>
        <NavBar/>
        <h1>To-Do List</h1>
        <div className='grid'>
            {tasks.length && tasks.map(e => (
            <Card style={{ width: '18rem' }} className="box boxes">
            <Card.Body>
                <Card.Title>{e.day}</Card.Title>
                <Card.Text>{e.tasks}</Card.Text>
                <Card.Text>{e.complete && 'complete'}</Card.Text>
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
            )) }
        </div>
    </div>
  );
}

export default Task;