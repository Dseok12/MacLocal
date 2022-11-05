import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Nft from './components/Nft/Nft';
import Influencer from './components/Influencer/Influencer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/nft'
          element={<Nft />}
        />
        <Route
          path='/influencer'
          element={<Influencer />}
        />
      </Routes>
    </div>
  );
}

export default App;
