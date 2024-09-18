import './css/base/App.css';
import './css/base/reset.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';

function App() {

  const [message, setMessage] = useState('');

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:5000/api');
    console.log(response.data.message)
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className='AppWrap'>
      <div className='AppInner'>
        <Header />
        <Body />
        <Footer/>
      </div>
    </div>
  )
}

export default App
