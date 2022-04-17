/* eslint-disable */
import React, {useState} from 'react';
import Header from './Header';
import Data from './data';
import Card from './Card';
import Jombotron from './Jombotron';
import Detail from './Detail';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';

function App() {

  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">

      <Header />


    <Switch>
      <Route exact path='/'>
        <Jombotron/>
        <div className="container">
          <div className="row">
            {
              shoes.map(function(글, i){
                return <Card shoes작명={shoes[i]} i작명={i} key={i} />
              })
            }
          </div>
        </div>
      </Route>
      <Route exact path='/detail/:id'>
        <Detail shoes작명={shoes} />
      </Route>

      <Route path='/:id'>
        <div>아무거나 적었을 때 이거 보여주셈</div>
      </Route>
      {/* <Route path='/어쩌구' component={Modal}></Route> */}
    </Switch>

      

    </div>
  );
}

export default App;
