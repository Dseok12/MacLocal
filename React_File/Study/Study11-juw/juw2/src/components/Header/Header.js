import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className='Header_Wrap'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/nft">NFT</Link>
          </li>
          <li>
            <Link to="/influencer">Influencer</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header