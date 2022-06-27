import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';
import Heading from './Components/Heading';
import List from './Components/Post/List';
import Upload from './Components/Post/Upload';

function App() {

  const [ContentList, setContentList] = useState([]);

  return (
    <div className="App">
      <Heading></Heading>
      {/* <Test></Test> */}
      <Routes>
        <Route
          path="/list "
          element={<List ContentList={ContentList} setContentList={setContentList} />} />
        <Route
          path="/upload"
          element={<Upload ContentList={ContentList} setContentList={setContentList} />} />
      </Routes>
    </div>
  );
}

export default App;
