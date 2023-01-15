import React from 'react'
import Logo from '../img/logo.png'

const Footer = () => {
  return (
    <div>
      <footer>
        <img src={Logo} alt="LOGO" />
        <span>
          카피라이트, <b>hellow</b>
        </span>
      </footer>
    </div>
  )
}

export default Footer