import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Heading from './Components/Heading';
import List from './Components/Post/List';
import Upload from './Components/Post/Upload';
import Detail from './Components/Post/Detail';
import Edit from './Components/Post/Edit';

function App() {

  return (
    <div className="App">
      <Heading></Heading>
      <Routes>
        <Route
          path="/list"
          element={<List />} />
        <Route
          path="/upload"
          element={<Upload />} />
        <Route
          path="/post/:postNum"
          element={<Detail  />} />
        <Route
          path="/edit/:postNum"
          element={<Edit  />} />
      </Routes>
    </div>
  );
}

export default App;
