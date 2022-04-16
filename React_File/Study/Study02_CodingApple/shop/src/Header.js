import React from "react";
import {
  Navbar, Container, Nav
} from 'react-bootstrap';
import {Link, Route, Switch} from 'react-router-dom';

function Header () {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand><Link to='/'>Shop</Link></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link><Link to='/'>Home</Link></Nav.Link>
          <Nav.Link><Link to='/detail'>Detail</Link></Nav.Link>
          <Nav.Link>Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;