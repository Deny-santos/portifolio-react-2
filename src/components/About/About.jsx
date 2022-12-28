import React from 'react'
import "./About.css"
import AppWrapp from '../../wrapp/AppWrapp'
import { perfilcom } from "../../assets"
import { abouts } from "./Values"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"

const About = () => {
  return (
    <section>
      <h5>Saiba Mais</h5>
      <h2>Sobre Min</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={perfilcom} alt="profile" />
          </div>
        </div>

          <div className="about__content">
              <div className="about__cards">
                {abouts.map((element, index) => (
                  <article  key={element+index} className='about__card'>
                    {element.icon}
                    <h5>{element.title}</h5>
                    <small>{element.description}</small>
                  </article>
                ))}
              </div>
            <p><ImQuotesLeft/> Tecnología é o meu hobby, Programação é minha paixão estou a disposição de novas oportunidades, Estagio, Freelancer, Efetivo.. Clique no botão abaixo e entre e  contato comigo <ImQuotesRight/></p>
            <a className='btn btn-primary' href="#contact">Fale Comigo</a>
          </div>
      </div>
    </section>
  )
}

export default AppWrapp(About, 'about')