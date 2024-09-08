import './App.css'
import './css/reset.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Diary from './pages/Diary.jsx';
import New from './pages/New.jsx';
import Notfound from './pages/Notfound.jsx';

import { getEmotionImages } from './util/get-emotion-image.js';

function App() {

  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      {/* 몇개 안되는 이미지를 사용할 때는 src/assets/ 폴더에서 이미지를 운영하는 것이 좋다. */}
      <div>
        <img src={getEmotionImages(1)} alt="" />
        <img src={getEmotionImages(2)} alt="" />
        <img src={getEmotionImages(3)} alt="" />
        <img src={getEmotionImages(4)} alt="" />
        <img src={getEmotionImages(5)} alt="" />
      </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/diary/:id"}>Diary</Link>
        <Link to={"/new"}>New</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/new" element={<New />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
