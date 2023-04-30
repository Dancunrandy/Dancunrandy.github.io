import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
    <h5>  What I Offer</h5>
    <h2>Services</h2>
    <div className='container services_container'>
        <article className='service'>
           <div className='service_head'>
            <h3>UI/UX Design</h3>
           </div>
           <ul className='service_list'>
              <li> 
              <BiCheck className='service_list-icon'/>
                <p>User Research:Understand the user's needs, goals, pain points, and behaviors.</p>
              </li>
              <li> 
              <BiCheck className='service_list-icon'/>
                <p>Web Design: Designing websites that are visually appealing, easy to navigate</p>
              </li>
              <li> 
              <BiCheck className='service_list-icon'/>
                <p>User Interface Design: Designing user interfaces that are intuitive, visually appealing, and easy to use.</p>
              </li>
              <li> 
              <BiCheck className='service_list-icon'/>
                <p>Usability Testing: Conducting usability testing the effectiveness and ease of use of a digital product.</p>
              </li>
              <li> 
              <BiCheck className='service_list-icon'/>
                <p>Information Architecture: Organizing and structuring content </p>
              </li>
           </ul>
        </article>
        <article className='service'>
           <div className='service_head'>
            <h3>Content Creation</h3>
           </div>
           <ul className='service_list'>
              <li> 
              <BiCheck className='service_list-icon'/>
                <p>Copywriting: Writing engaging, persuasive, and effective copy for websites, advertising campaigns e.t.c</p>
              </li>
              <li> 
              <BiCheck className='service_list-icon'/>
                <p>Content writing: Writing high-quality content for blogs, articles</p>
              </li>
              <li> 
              <BiCheck className='service_list-icon'/>
                <p>Content marketing: Creating and implementing content marketing campaigns that drive traffic, leads, and conversions for clients.</p>
              </li>
              <li> 
              <BiCheck className='service_list-icon'/>
                <p>Email marketing: Creating compelling email campaigns that engage subscribers and drive conversions.</p>
              </li>
              <li> 
              <BiCheck className='service_list-icon'/>
                <p>Content editing and proofreading: to ensure content is error-free, well-structured, and aligned with the client's brand and messaging. </p>
              </li>
           </ul>
        </article>
        <article className='service'>
           <div className='service_head'>
            <h3>Web Development</h3>
           </div>
           <ul className='service_list'>
              <li> 
              <BiCheck className='service_list-icon'/>
                <p>Website design: Designing visually appealing and user-friendly websites</p>
              </li>
              <li> 
              <BiCheck className='service_list-icon'/>
                <p>Front-end development: Creating the client-side portion of a website using HTML, CSS,React and JavaScript.</p>
              </li>
              <li> 
              <BiCheck className='service_list-icon'/>
                <p>Back-end development: Developing the server-side portion of a website using programming languages like Python, Ruby on Rails, Python, or Java.</p>
              </li>
              <li> 
              <BiCheck className='service_list-icon'/>
                <p>E-commerce development: Building online stores and e-commerce websites that are secure, user-friendly, and optimized for conversions.</p>
              </li>
              <li> 
              <BiCheck className='service_list-icon'/>
                <p>Website maintenance: Providing ongoing website maintenance and support </p>
              </li>
           </ul>
        </article>
        <article className='service'>
           <div className='service_head'>
            <h3>Fiancial Services</h3>
           </div>
           <ul className='service_list'>
              <li> 
              <BiCheck className='service_list-icon'/>
                <p>Business financial services: accounting, bookkeeping, and payroll services.</p>
              </li>
              <li> 
              <BiCheck className='service_list-icon'/>
                <p>Financial planning</p>
              </li>
              <li> 
              <BiCheck className='service_list-icon'/>
                <p>Tax planning</p>
              </li>
              <li> 
              <BiCheck className='service_list-icon'/>
                <p>Risk management</p>
              </li>
              <li> 
              <BiCheck className='service_list-icon'/>
                <p>Debt management </p>
              </li>
           </ul>
        </article>
    </div>
    
    </section>
  )
}

export default Services