import { Routes, Route } from 'react-router-dom';
import './App.css';
import "./css/base/_Reset.css";
import "./css/common/common.css";
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Introduce from './pages/Introduce.jsx';
import Package from './pages/Package.jsx';

function App() {
  return (
    <>
      <div className="AppAllContents">
        <Header/>
        {/* Router는 이미 main.jsx에서 감싸고 있으므로 사용하지 않음 */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/introduce' element={<Introduce />} />
          <Route path='/package' element={<Package />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
