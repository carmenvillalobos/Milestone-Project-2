import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from './NavBar';
import "./Task.css";
import {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

function Task() {
    const [tasks, setTasks] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/api/tasks')
            const resData = await response.json()
            setTasks(resData)
        }
        fetchData()
    }, [])

function deleteTask(id){
    fetch(`http://localhost:3000/api/tasks/${id}`, { 
    method: 'DELETE',
    headers: {"Content-Type": "application/json"}
    }).then(response => response.json())
    .then(data => console.log(data)) 
    .catch(error => console.error(error))
    console.log("deleted: ", id)
    navigate(0);
}

  return (
    <div>
        <h1>Task List</h1>
        <NavBar/>
        <div className='background'>
            <div className='grid'>
            {tasks.length && tasks.map(e => (
            <Card style={{ width: '18rem' }} className="box boxes">
            <Card.Body>
                <Card.Title>{e.day}</Card.Title>
                <Card.Text>{e.tasks}</Card.Text>
                <Card.Text className="complete">{e.complete && 'Complete ✅'}</Card.Text>
                    <Link to={`/tasks/form/edit/${e.id}`}>
                    <Button  size="sm">
                        Edit
                    </Button>
                    </Link>
                    <Button
                        onClick={ () => deleteTask(e.id)} 
                        variant="danger" 
                        size="sm" 
                        type='submit'
                        className="delete">
                        Delete
                    </Button>
                <form action=""></form>
            </Card.Body>
            </Card>
            )) }
            </div>
        </div>
    </div>
  );
}

export default Task;