import React from 'react'
import Navbar from 'react-bootstrap/Nav'

function NavBar (props) {
    return (
    <Navbar variant="tabs" className="justify-content-center sticky-top bg-light">
      <Navbar.Item>
        <Navbar.Link href="/">Home</Navbar.Link>
      </Navbar.Item>
      <Navbar.Item>
        <Navbar.Link href="/tasks">To-Do</Navbar.Link>
      </Navbar.Item>
      <Navbar.Item>
        <Navbar.Link href="/tasks/form">Add Task</Navbar.Link>
      </Navbar.Item>
    </Navbar>
    )
}

export default NavBar