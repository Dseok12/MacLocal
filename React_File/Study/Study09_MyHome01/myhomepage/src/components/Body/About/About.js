import React, {useState, useEffect} from 'react';
import axios from 'axios';

function About() {

  const [getData, setGetData] = useState([]);

  useEffect(() => {
    axios.get('https://api.instantwebtools.net/v1/airlines')
    .then((res) => {
      console.log(res.data[0].name);
      console.log('성공');
      setGetData(res.data[0].name);
      // for(let i = 0; i <= res.data.length; i++){
      //   setGetData(res.data[i].name);
      // }
    }).catch((err) => {
      console.error(err);
      console.log('실패')
    });
  }, []);

  return (
    <div className='AboutWrap'>
      <div className='inner'>
        <p>{getData}</p>
        <p>About</p>
      </div>
    </div>
  )
}

export default About;