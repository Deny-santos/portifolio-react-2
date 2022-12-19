import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs"

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/denisson-santos-019956214" target="_blank">
            <BsLinkedin/>
        </a>
        <a href="https://github.com/Deny-santos" target="_blank">
            <BsGithub/>
        </a>
        <a href="https://www.instagram.com/denysantoz/ " target="_blank">
            <BsInstagram/>
        </a>
    </div>
  )
}

export default HeaderSocial