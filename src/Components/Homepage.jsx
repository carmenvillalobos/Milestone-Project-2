import './Homepage.css'
import {Link} from "react-router-dom"
import React from 'react';
import {Button, ListGroup} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
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
            <NavBar/>
        <br/>
            <Card text="white" className="mb-2" style={{backgroundColor: "#00CBCC", borderRadius: "25px 25px 25px 25px", boxShadow: "0px 12px 18px -6px rgba(0,0,0,0.5)"}}> {/*main card*/}
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
        <div className="image-block">
                <div>
                    <Image className="wd-screen-img" variant="top" src="https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-hands-holding-clipboard-with-to-do-list-template-and-pencil-filling-png-image_1828754.jpg" alt="to-do checklist"style={{marginBottom: 20, boxShadow: "0px 12px 18px -6px rgba(0,0,0,0.5)"}} width="150" roundedCircle/>
                    <div className="hide" style={{padding: "1em", backgroundColor: "#BCECE0", color: "black", border: "0.5px", borderRadius: "25px", boxShadow: "0px 12px 18px -6px rgba(0,0,0,0.5)"}}>
                        <p><b>Keep track</b> of your daily productivity with chore lists</p>
                    </div>
                </div>
                <div>
                    <Image className="wd-screen-img" variant="top" src="https://classroomclipart.com/images/gallery/Clipart/Fitness_and_Exercise/TN_man-running-on-treadmill-work-out-clipart.jpg" alt="exercising on treadmill" style={{marginBottom: 20, boxShadow: "0px 12px 18px -6px rgba(0,0,0,0.5)"}} width="153" roundedCircle/>
                    <div className="hide" style={{padding: "1em", backgroundColor: "#BCECE0", color: "black", border: "0.5px", borderRadius: "25px", boxShadow: "0px 12px 18px -6px rgba(0,0,0,0.5)"}}>
                        <p><b>Stay consistent</b> and focused on your fitness goals</p>
                    </div>
                </div>
                <div>
                    <Image className="wd-screen-img" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xG6YymZ00mI8i665mN2rKJJT9o2txR-EWA&usqp=CAU" alt="reading/writing hobbies" style={{marginBottom: 20, boxShadow: "0px 12px 18px -6px rgba(0,0,0,0.5)"}} width="150" roundedCircle/>
                    <div className="hide" style={{padding: "1em", backgroundColor: "#BCECE0", color: "black", border: "0.5px", borderRadius: "25px", boxShadow: "0px 12px 18px -6px rgba(0,0,0,0.5)"}}>
                        <p><b>Make time</b> for your hobbies and personal growth</p>
                    </div>
                </div>
            </div>
        <br/>
            <Row xs={2} md={2}>
                <Col>
                    <Card className="daily" style={{backgroundColor: "#BCECE0", boxShadow: "0px 12px 18px -6px rgba(0,0,0,0.5)"}}>
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
                    <Card className="weekly" style={{backgroundColor: "#BCECE0", boxShadow: "0px 12px 18px -6px rgba(0,0,0,0.5)"}}>
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
            <br/>
        </div>
    )
}

export default Homepage