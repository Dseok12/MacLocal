/* eslint-disable */
import React, { useState, useContext } from "react";
import {
  Navbar, Nav
} from 'react-bootstrap';
import Data from './data';
import Card from "./Card";
import Detail from "./Detail";
import {Link, Route, Switch} from 'react-router-dom';
import axios from "axios";
import './App.css';

export let 재고context = React.createContext();

function App() {

  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);

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
            <재고context.Provider value={재고}>
              <div className="row">
                {
                  shoes.map((글, i) => {
                    return (<Card
                            shoes작명={shoes[i]}
                            i작명={i}
                            key={i}
                          />)
                  })
                }
              </div>
            </재고context.Provider>
            <button
              className="btn btn-primary"
              onClick={() => {

                // axios.post('서버API',{
                //   id: 'asdfsafd',
                //   pw: 1234
                // }).then().catch()

                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((결과) => {
                  // console.log(결과.data);
                  shoes변경([...shoes, ...결과.data]);
                })
                .catch((err) => console.error(err));
              }}
            >더보기</button>
          </div>
        </Route>

        <Route path='/detail/:id'>
          <재고context.Provider value={재고}>
            <Detail shoes작명={shoes} 재고작명={재고} 재고변경작명={재고변경} />
          </재고context.Provider>
        </Route>

        <Route path='/:id'></Route>
      </Switch>
      

    </div>
  );
}


export default App;
