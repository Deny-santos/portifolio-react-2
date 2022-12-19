import React from 'react'
import "./Header.css"
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import { perfilJPG } from "../../assets"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I`m</h5>
        <h1>Deny Santos</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA/>
        <HeaderSocial/>

        
        <div className="me">
          <img src={perfilJPG} alt="me" />
        </div>

        <a className='scroll_down' href="#contact" >Scroll Down</a>
      </div>
    </header>
  )
}

export default Header