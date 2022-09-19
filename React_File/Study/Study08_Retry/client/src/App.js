import './App.css';
// import Test3 from './Test3';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Heading from './components/Heading';
import List from './components/List';
import Upload from './components/Upload';

function App() {
  const [ContetnList, setContetnList] = useState([]);
  return (
    <div className="App">
      {/* <Test3 /> */}
      <Heading />
      <Routes>
        <Route
          path="/list"
          element={
            <List
              ContetnList={ContetnList}
              setContetnList={setContetnList}
            />
          }
        ></Route>
        <Route
          path="/upload"
          element={
            <Upload
              ContetnList={ContetnList}
              setContetnList={setContetnList}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
