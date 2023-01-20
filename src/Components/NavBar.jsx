import React from 'react'
import Navbar from 'react-bootstrap/Nav'

function NavBar (props) {
    return (
    <Navbar variant="tabs" className="justify-content-center sticky-top bg-light">
      <Navbar.Item>
        <Navbar.Link href="./Homepage.jsx">Home</Navbar.Link>
      </Navbar.Item>
      <Navbar.Item>
        <Navbar.Link href="./Task.jsx">To-Do</Navbar.Link>
      </Navbar.Item>
    </Navbar>
    )
}

export default NavBar