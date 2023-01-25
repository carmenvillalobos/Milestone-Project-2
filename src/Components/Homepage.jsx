import './Homepage.css'
import {Link} from "react-router-dom"
import React from 'react';
import {Button, ListGroup} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {ProgressBar} from 'react-bootstrap';
import {CircularProgressbar} from 'react-circular-progressbar';
import {ProgressBar} from 'react-bootstrap'
import 'react-circular-progressbar/dist/styles.css'
import NavBar from './NavBar';

function Homepage (props) {
    // placeholder progress bar data
    const daily = 85;  // %
    const weekly = 20; // %
    return (
        <div class="container-fluid">
            <h1 style={{ color: 'white' }}>To-do List Application</h1>
            <NavBar></NavBar>
        <br/>
            <Card text="white" className="mb-2" style={{backgroundColor: "#00CBCC", borderRadius: "25px 25px 25px 25px"}}> {/*main card*/}
                <Card.Body>
                    <Card.Title>Start Task Managing Today!</Card.Title>
                    <Card.Text className="blockquote mb-0">
                        <p>"The secret of getting ahead is getting started."</p>
                        <footer className="blockquote-footer">
                            Mark Twain
                        </footer>
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Link to="/tasks">
                    <Button variant="warning" size="sm">
                        Create New List
                    </Button>
                    </Link>
                </Card.Body>
            </Card>
        <br/>


            {/* <Row xs={2} md={2}>
                <Col>
                    <Card className="daily" style={{backgroundColor: "#BCECE0"}}>
                        <Card.Body>
                            <Card.Title>Today's Tasks</Card.Title>
                        </Card.Body>
                        <div className="progress-wheel" style={{ width: 200, height: 200, marginLeft: 73, marginBottom: 20}}>
                        <CircularProgressbar value={daily} text={`${daily}%`} />
                        </div>
                        <div className="progress-bar">
                            <ProgressBar now={daily} label={`${daily}%`}/>
                        </div>
                        <ListGroup className="w-100 p-2">
                            <ListGroup.Item>Item 1</ListGroup.Item>
                            <ListGroup.Item>Item 2</ListGroup.Item>
                            <ListGroup.Item>Item 3</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button size="sm">View All</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <br/>
                <Col>
                    <Card className="weekly" style={{backgroundColor: "#BCECE0"}}>
                        <Card.Body>
                            <Card.Title>Weekly Tasks</Card.Title>
                        </Card.Body>
                        <div className="progress-wheel" style={{ width: 200, height: 200, marginLeft: 73, marginBottom: 20}}>
                            <CircularProgressbar value={weekly} text={`${weekly}%`} />
                        </div>
                        <div className="progress-bar">
                            <ProgressBar now={weekly} label={`${weekly}%`}/>
                        </div>
                        <ListGroup className="w-100 p-2">
                            <ListGroup.Item>Item 1</ListGroup.Item>
                            <ListGroup.Item>Item 2</ListGroup.Item>
                            <ListGroup.Item>Item 3</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button size="sm">View All</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br/> */}
        </div>
    )
}

export default Homepage