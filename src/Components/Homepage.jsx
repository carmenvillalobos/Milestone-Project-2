import './Homepage.css'
import React from 'react';
import {Button, ListGroup} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

function Homepage (props) {
    return (
        <div class="container-fluid">
        <br/>
            <Card text="white" className="mb-2" style={{backgroundColor: "#00CBCC", borderRadius: "25px 25px 25px 25px"}}>
                <Card.Body>
                    <Card.Title>Start Task Managing!</Card.Title>
                    <Card.Text className="blockquote mb-0">
                        <p>"The secret of getting ahead is getting started."</p>
                        <footer className="blockquote-footer">
                            Mark Twain
                        </footer>
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    
                    <Button variant="warning" size="sm">Create New List</Button>
                </Card.Body>
            </Card>
        <br/>
            <Row xs={1} md={2}>
                <Col>
                    <Card style={{backgroundColor: "#BCECE0"}}>
                        <Card.Img variant="top" src=""/>
                        <Card.Body>
                            <Card.Title>Today's Tasks</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Item 1</ListGroup.Item>
                            <ListGroup.Item>Item 2</ListGroup.Item>
                            <ListGroup.Item>Item 3</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button size="sm">See all tasks</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <br/>
                <Col>
                    <Card style={{backgroundColor: "#BCECE0"}}>
                        <Card.Img variant="top" src=""/>
                        <Card.Body>
                            <Card.Title>Weekly Tasks</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Item 1</ListGroup.Item>
                            <ListGroup.Item>Item 2</ListGroup.Item>
                            <ListGroup.Item>Item 3</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button size="sm">See all tasks</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br/>
        </div>
    )
}

export default Homepage