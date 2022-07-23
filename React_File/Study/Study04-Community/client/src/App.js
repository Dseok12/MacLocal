import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Heading from './Components/Heading';
import List from './Components/Post/List';
import Upload from './Components/Post/Upload';
import Detail from './Components/Post/Detail';
import Edit from './Components/Post/Edit';

import Login from './Components/User/Login';
import Register from './Components/User/Register';

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
        <Route
          path="/login"
          element={<Login />} />
        <Route
          path="/register"
          element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
