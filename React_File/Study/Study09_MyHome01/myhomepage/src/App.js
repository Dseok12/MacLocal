import './App.css';
import './Reset.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import About from './components/Body/About/About';
import Portfolio from './components/Body/Portfolio/Portfolio';
import Contact from './components/Body/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="Wrap">
      <Header />
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
