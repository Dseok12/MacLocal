import React from 'react';
import "./css/Header.css";

const Header = () => {
  return (
    <div className='HeaderWrap'>
      <h3>오늘은 🗓️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  )
}

export default Header