import './App.css';
import Test3 from './Test3';
import { Routes, Route } from 'react-router-dom';
import Heading from './components/Heading';
import List from './components/List';
import Upload from './components/Upload';

function App() {
  return (
    <div className="App">
      {/* <Test3 /> */}
      <Heading />
      <Routes>
        <Route
          path="/list"
          element={<List />}
        ></Route>
        <Route
          path="/upload"
          element={<Upload />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
