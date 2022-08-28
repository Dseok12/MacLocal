import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div className='header_box'>
        <h1 className='logo'>
          <Link to='/'>TESTING</Link>
        </h1>
        <nav>
          <ul className='menu_box'>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/test'>Test</Link>
            </li>
            <li>
              <Link to='/port'>Port</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header;