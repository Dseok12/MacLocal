import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className='footer_box'>
        <h2>
          <Link to='/'>홈으로</Link>
        </h2>
      </div>
    </div>
  )
}

export default Footer