import React from 'react'
import "./Portifolio.css"
import AppWrapp from '../../wrapp/AppWrapp'
import {sites} from "./prejectsValues"


const Portifolio = () => {
  return (
    <section>
      <h5>Meus projetos recentes</h5>
      <h2>Web Sites</h2>

      <div className="container portfolio__container">
        {sites.map((site, index) => (
          <article className="portfolio__item">
            <div className="portfolio__item-img">
              <img src={site.img} alt="" />
            </div>
            <h3>{site.titulo}</h3>
            <div className='portfolio__item-cta'>
              <a href={`${site.linkToGit}`} className='btn'target='_blank' rel='noreferrer'>Github</a>
              <a href={`${site.linkToShowProject}`} className='btn btn-primary' target='_blank' rel='noreferrer'>ver projeto</a>
            </div>
         </article>
        ))}
      </div>
    </section>
  )
}

export default AppWrapp(Portifolio, "portifolio")