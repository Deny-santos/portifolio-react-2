import React from 'react'
import "./Contact.css"
import AppWrapp from '../../wrapp/AppWrapp'
import { BsWhatsapp } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"


const Contact = () => {

  return (
    <section className='height'>
      <h5>Manda Um Oi</h5>
      <h2 className='contact__h2'>Entrar Em Contato</h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__icon'/>
            <h4>Email</h4>
            <h5>denisson.graca3@gmail.com</h5>
            <a href="mailto:denisson.graca3@gmail.com" target={"_blank"} rel='noreferrer'>Enviar Messagem</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__icon'/>
            <h4>Whatsapp</h4>
            <h5>+55 (79) 99845-9078</h5>
            <a href="https://api.whatsapp.com/send?phone=7998459078" target={"_blank"} rel='noreferrer'>Manda Um Zap</a>
          </article>
        </div>
        {
          <form action='https://formsubmit.co/denisson.graca3@gmail.com' method='POST'>
            <input type="text" name='name' placeholder='Digite Seu Nome Completo' required/>
            <input type="email" name='email' placeholder='Digite Seu Email' required/>
            <textarea name="message" rows="7" placeholder='Duvidas, Sugestôes, Solicitações, ...' required></textarea>
            <input type="hidden" name='_next' value="http://localhost:3000/#contact"/>
            <button className='btn btn-primary' type='submit'>Enviar Messagem</button>

            <input type="hidden" name='_subject' value={`novo contato DO MEU PORTIFOLIO`}/>
            <input type="text" name='_honey' style={{display: "none"}}/> {/* evitar span */}
            <input type="hidden" name='_captcha' value="false"/> {/* desabilitar o captcha */}
          </form>
        }
      </div>
    </section>
  )
}

export default AppWrapp(Contact, 'contact')