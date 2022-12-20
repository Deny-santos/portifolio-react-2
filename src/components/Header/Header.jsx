import React from 'react'
import "./Header.css"
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import { perfilPNG } from "../../assets"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, Sou O </h5>
        <h1>Deny Santos</h1>
        <h5 className="text-light">Desenvolvedor Web Frontend</h5>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={perfilPNG} alt="me" />
        </div>

        <div className='scroll_wrapp'>
          <div></div>
          <a className='scroll_down' href="#contact" >Ir Para Baixo</a>
        </div>
      </div>
    </header>
  )
}

export default Header