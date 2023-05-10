import React from 'react'
import './Header.css'
import Cta from './Cta'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
    <div className="container header_container">
         <h5> Hello, I'm</h5>
          <h1>Daniel Mutie</h1>
          <h5 className="text-light">Fullstack Developer</h5>
        <Cta/>
        <HeaderSocials/>
        
        <div className="me">
            <img src= {ME} alt="me" />
        </div>
          
          <a href="#contact" className='scroll_down' >scroll down</a>
    </div>
    </header>
  )
}

export default Header