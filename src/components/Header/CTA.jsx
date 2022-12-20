import React from 'react'
import { CV } from "../../assets"

const CTA = () => {
  return (
    <div className='cta'>
        <a className='btn' href={CV} download>Download CV</a>
        <a className='btn btn-primary' href="#contact">Fale Comigo</a>
    </div>
  )
}

export default CTA