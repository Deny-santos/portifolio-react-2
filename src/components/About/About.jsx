import React from 'react'
import "./About.css"
import AppWrapp from '../../wrapp/AppWrapp'
import { perfilcom } from "../../assets"
import { values } from "./Values"

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
                {[values.experience, values.tec, values.projects].map((element, index) => (
                  <article  key={element+index} className='about__card'>
                        {element.icon}
                        <h5>{element.title}</h5>
                        <small>{element.description}</small>
                      </article>
                ))}
              </div>
            <p>iusto nam blanditiis ducimus rerum totam autem facere ullam, eius delectus non. Quod ipsum magni eum mollitia?</p>
            <a className='btn btn-primary' href="#contact">Fale Comigo</a>
          </div>
      </div>
    </section>
  )
}

export default AppWrapp(About, 'about')