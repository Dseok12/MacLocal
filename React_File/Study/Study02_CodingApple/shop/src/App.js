/* eslint-disable */
import React, {useState} from 'react';
import {
  Navbar, Container, Nav, NavDropdown
} from 'react-bootstrap';
import Data from './data';
import Card from './Card';
import './App.css';

function App() {

  let [shoes, shoes변경] = useState(Data)

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <div class="jumbotron" className='background'>
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>

      <div className="container">
        <div className="row">
          {
            shoes.map(function(글, i){
              return <Card shoes작명={shoes[i]} i작명={i} />
            })
          }
        </div>
      </div>

    </div>
  );
}

export default App;
