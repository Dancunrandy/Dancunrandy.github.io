import React from 'react'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import './About.css'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt="about image"/>
            </div>
          </div>
          
          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small> 4+ Years Working</small>
              </article>
              
              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>120 + Worldwide</small>
              </article>
              
              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>  Projects</h5>
                <small> 20+ Completed</small>
              </article>
            </div>
            <p>
            Am a motivated and detail-oriented individual with a passion for technology and problem-solving. 
            With over 5years of experience in Software engineering and Finance, I've developed a strong skillset in Data analysis, Financial management,
            Javascript , Ruby  and React. I thrive in fast-paced environments and love collaborating with teams to achieve shared goals.
            I'm excited to bring my skills and experience to new challenges and opportunities, and I'm confident that I can make a valuable contribution to any organization I join.
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk </a>
          </div>
        </div>
    </section>
  )
}

export default About