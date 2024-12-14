import { Route, Routes } from 'react-router-dom';
import './_Reset.css';
import './App.css';
import Dairy from './page/Dairy';
import Home from './page/Home';
import New from './page/New';
import Notefound from './page/Notefound';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/new"
        element={<New />}
      />
      <Route
        path="/dairy"
        element={<Dairy />}
      />
      <Route
        path="*"
        element={<Notefound />}
      />
    </Routes>
  );
}

export default App;
