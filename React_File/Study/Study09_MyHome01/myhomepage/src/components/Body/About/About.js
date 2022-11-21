import React, {useState, useEffect} from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

function About() {


  const [getData, setGetData] = useState([]);

  useEffect(() => {
    axios.get('https://api.instantwebtools.net/v1/airlines',{ 
       withCredentials: true // 쿠키 cors 통신 설정
    })
    .then((res) => {
      console.log(res.data);
      setGetData(res.data);
      console.log('성공');
    }).catch((err) => {
      console.error(err);
      console.log(err)
    })
  }, []);

  return (
    <div className='AboutWrap'>
      <div className='inner'>
        <p>{}</p>
        <p>About</p>
      </div>
    </div>
  )
}

export default About;
