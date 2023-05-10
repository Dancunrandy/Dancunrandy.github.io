import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import {RiMessengerLine} from 'react-icons/ri'
import './Contact.css';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sqgzxcn', 'template_taj3xoq', form.current, 'ILIMcSZ69nBfSnDUG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>daniel@danielmutie.online</h5>
            <a href='daniel@danielmutie.online'target=" _blank"> Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>messenger</h4>
            <h5>Facebook</h5>
            <a href='https://m.me/daniel.mutie.754' target=" _blank"> Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <a href='https://api.whatsapp.com/send?+254736731840'target=" _blank"> Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact