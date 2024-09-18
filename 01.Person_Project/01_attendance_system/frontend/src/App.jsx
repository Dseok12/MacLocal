import axios from 'axios';
import { useEffect, useState } from 'react';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import './css/base/App.css';
import './css/base/reset.css';

function App() {
  const [message, setMessage] = useState('');

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:5001/api');
    console.log(response.data.message);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="AppWrap">
      <div className="AppInner">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
