import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='HeaderWrap'>
      <div className='inner'>
        <div className='logo'><h1><Link to='/'>Logo</Link></h1></div>
        <ul className='menu_box'>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/portfolio'>Portfolio</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header