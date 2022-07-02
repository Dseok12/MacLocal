import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Heading from './Components/Heading';
import List from './Components/Post/List';
import Upload from './Components/Post/Upload';
import Detail from './Components/Post/Detail';

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
      </Routes>
    </div>
  );
}

export default App;
