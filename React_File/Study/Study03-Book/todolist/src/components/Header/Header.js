import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {

  const AddContents = () => {
    
  }

  return(
    <div className="wrap header_wrap">
      <div className="inner">
        <h1><Link to='/'>TODO</Link></h1>
        <ul className="menu_list_box">
          <li>
            <button
              
            >컨텐츠추가</button>
          </li>
          <li>
            <button>컨텐츠추가</button>
          </li>
          <li>
            <button>컨텐츠추가</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;