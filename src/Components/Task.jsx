import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Task.css"

function Task() {
  return (
    <div>
        <h1>Weekly To-Do List</h1>
        <div className='grid'>
            <Card style={{ width: '18rem' }} className="box box1">
            <Card.Body>
                <Card.Title>Monday</Card.Title>
                <Button variant="primary" size="sm" type='submit'>Add A Goal</Button>
                <form action=""></form>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="box box2">
            <Card.Body>
                <Card.Title>Tuesday</Card.Title>
                <Button variant="primary" size="sm">Add A Goal</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="box box3">
            <Card.Body>
                <Card.Title>Wednesday</Card.Title>
                <Button variant="primary" size="sm">Add A Goal</Button>
            </Card.Body>
            </Card><Card style={{ width: '18rem' }} className="box box4">
            <Card.Body>
                <Card.Title>Thursday</Card.Title>
                <Button variant="primary" size="sm">Add A Goal</Button>
            </Card.Body>
            </Card><Card style={{ width: '18rem' }} className="box box5">
            <Card.Body>
                <Card.Title>Friday</Card.Title>
                <Button variant="primary" size="sm">Add A Goal</Button>
            </Card.Body>
            </Card><Card style={{ width: '18rem' }} className="box box6">
            <Card.Body>
                <Card.Title>Saturday</Card.Title>
                <Button variant="primary" size="sm">Add A Goal</Button>
            </Card.Body>
            </Card><Card style={{ width: '18rem' }} className="box box7">
            <Card.Body>
                <Card.Title>Sunday</Card.Title>
                <Button variant="primary" size="sm">Add A Goal</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="box box8">
            <Card.Body>
                <Card.Title>Extra Tasks</Card.Title>
                <Button variant="primary" size="sm">Add A Goal</Button>
            </Card.Body>
            </Card>
        </div>
    </div>
  );
}

export default Task;