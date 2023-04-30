import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {  Pagination,  A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [

            {
            avatar:AVTR1,
            name:'Carol Rawell',
            review:' I had an exceptional experience working with Daniel Mutie. From the very beginning, he demonstrated a keen understanding of my needs and went above and beyond to ensure that all of my requirements were met. Daniels professionalism, attention to detail, and ability to deliver high-quality work on time and within budget was truly impressive. I highly recommend Daniel as a service provider, and I look forward to working with him again in the future.'
 
            },
            {
              avatar:AVTR2,
              name:'Tyrese DeShawn',
            
              review:'I recently had the pleasure of working with Daniel Mutie and I must say that I was thoroughly impressed. Daniel is a true professional who takes great pride in his work. He was able to deliver high-quality results in a timely manner, and was always available to answer any questions I had. His attention to detail and commitment to customer satisfaction is second to none. I would highly recommend Daniel to anyone in need of his services.'
            },
            {
              avatar:AVTR3,
              name:'Trevah Rogders',
            
              review:'I had the pleasure of working with Daniel Mutie on a recent project and I couldnt be happier with the results. Daniel is a true expert in his field and his level of professionalism and dedication is unparalleled. He was able to deliver a high quality product on time and within budget, and was always available to answer any questions or concerns I had. I highly recommend Daniel to anyone looking for a reliable and talented service provider.'
            },
            {
              avatar:AVTR4,
              name:'Fatuma Abdullrahman',
            
              review:'Working with you was an absolute pleasure. you a true professional who goes above and beyond to ensure that your clients are satisfied with the results. You an expert in your field and your attention to detail and dedication to quality is truly impressive. I was particularly impressed with his ability to communicate effectively and keep me updated throughout the entire process. I would highly recommend Daniel to anyone looking for a service provider who truly cares about their clients.'
            }
            



]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials_container'
      
                // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      
      >
        {
          data.map(({avatar,name,review},index)=>{
            return (
              <SwiperSlide key={index} className='testimonial'>
                  <div className='client_avatar'>
                    <img src={avatar} alt=''/>
                  </div>
                  <h5 className='client_name'>{name}</h5>
                    <small className='client_review'>{review}</small>
            
            </SwiperSlide>
            
            
            )
          })
        
        
        }
      
      </Swiper>
    </section>
  )
}

export default Testimonials