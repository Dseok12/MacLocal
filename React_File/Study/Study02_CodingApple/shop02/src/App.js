/* eslint-disable */
import React, { useState } from "react";
import {
  Navbar, Nav
} from 'react-bootstrap';
import Data from './data';
import Card from "./Card";
import Detail from "./Detail";
import {Link, Route, Switch} from 'react-router-dom'
import './App.css';

function App() {

  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand><Link to='/'>Shop</Link></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='/detail'>Detail</Nav.Link>
          <Nav.Link>Pricing</Nav.Link>
        </Nav>
      </Navbar>

      
      <Switch>
        <Route exact path='/'>
          <div class="jumbotron" className="background">
            <h1 class="display-4">WellCome! Shop</h1>
            <p class="lead">
              This is a simple hero unit, a simple jumbotron-style
              component for calling extra attention to featured
              content or information.
            </p>
            <hr class="my-4" />
            <p>
              It uses utility classes for typography and spacing
              to space content out within the larger container.
            </p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </div>

          <div className="container">
            <div className="row">
              {
                shoes.map((글, i) => {
                  return <Card
                          shoes작명={shoes[i]}
                          i작명={i}
                        />
                })
              }
            </div>
          </div>
        </Route>

        <Route path='/detail/:id'>
          <Detail shoes작명={shoes} />
        </Route>

        <Route path='/:id'></Route>
      </Switch>
      

    </div>
  );
}

export default App;
