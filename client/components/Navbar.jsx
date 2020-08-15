import { Navbar, Nav, Button } from 'react-bootstrap';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

export default function Notnav() {
  return (
  <Navbar bg="light" expand="lg" className="justify-content-between">
    <Navbar.Brand href="#home">Social Scrapbook</Navbar.Brand>
    <Nav>
        <a href="/api/login"><Button variant="outline-primary"><FontAwesomeIcon icon={faGoogle} /> Sign In</Button></a>
    </Nav>
  </Navbar>
  )
}