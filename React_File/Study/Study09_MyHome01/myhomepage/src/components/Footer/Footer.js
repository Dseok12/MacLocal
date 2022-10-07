import React from 'react';
import './Footer.scss';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='FooterWrap'>
      <div className='inner'>
        <h2 className='footer_logo'>
          <Link to='/'>
            <img src={logo}/>
            {/* <img src="../../../public/assets/img/logo.png"/> */}
            {/* Logo */}
          </Link>
        </h2>
        <div className='copy_rigth_box'>
          <p className='copy_right'>CopyRightⒸ 2022 Make D.seok</p>
        </div>
        <div className='contact_wrap'>
          <ul className='contact_box'>
            <li className='address'>
              서울시 중랑구
            </li>
            <li className='phone'>
              <a href='tel:내 전화번호'>내 전화번호</a>
            </li>
            <li className='email'>
              <a href="mailto:ehskstkrjs@naver.com">ehskstkrjs@naver.com</a>
            </li>
          </ul>
        </div>
        <div className='sns_wrap'>
          <ul className='sns_box'>
            <li>
              <a
                href="https://github.com/Dseok12"
                target="_blank"
                rel="noopener noreferrer"
              >깃허브</a>
            </li>
            <li>
              <a
                href="https://blog.naver.com/ehskstkrjsa"
                target="_blank"
                rel="noopener noreferrer"
              >블로그</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer