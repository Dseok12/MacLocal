import React from 'react';
import "../css/component/Footer.css";

const Footer = () => {
  return (
    <div className='FooterWrap'>
      <div className="Footer_inner">
        <footer>
        CopyRight &copy; <b>JEONG</b> {new Date().toLocaleDateString()}
        </footer>
      </div>
    </div>
  )
}

export default Footer