import React from 'react'
import "./Experiences.css"
import AppWrapp from '../../wrapp/AppWrapp'
import { BsPatchCheckFill } from "react-icons/bs"
import { experiencesBack, experiencesFront } from "./experienceValues"

const Experiences = () => {
  return (
    <section>
      <h5>Minhas Habilidades</h5>
      <h2>Minhas Experiência</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
            <div  className='experience__content'>
              {experiencesFront.map((content, index) => (
                <article key={content+index} className='experiences__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                   <div>
                      <h4>{content.title}</h4>
                      <small className='text-light'>{content.description}</small>
                   </div>
                  </article>
              ))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
              <div  className='experience__content'>
                {experiencesBack.map((content, index) => (
                  <article key={content+index} className='experiences__details'>
                      <BsPatchCheckFill className='experience__details-icon' />
                      <div>
                        <h4>{content.title}</h4>
                        <small className='text-light' >{content.description}</small>
                      </div>
                    </article>
                ))}
              </div>
        </div>
      </div>
    </section>
  )
}

export default AppWrapp(Experiences, 'experience')