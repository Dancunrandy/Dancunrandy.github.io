import React from 'react'
import CHARITYAPP from '../../assets/charityapp.png'
import LIBRARY from '../../assets/library.png'
import COMMERCE from '../../assets/e-commerce.png'
import MAJUU from '../../assets/majuu.png'
import './Portfolio.css'
const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className='container portfolio_container'>
      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={CHARITYAPP} alt=""/>
        </div>
            <h3>CHARITY</h3>
              <div className='portfolio_item-cta'>
                <a href='https://github.com/KeittahSewe/Charity-Application' className='btn'target=''>Github</a>
                <a href='https://charity-application.vercel.app/'className='btn btn-primary' target='CHARITYAPP'>live Demo</a>
                </div>
      </article>
      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={LIBRARY} alt=""/>
        </div>
            <h3>LIBRARY</h3>
            <div className='portfolio_item-cta'>
              <a href='https://github.com/venus714/home-lib' className='btn'target=''>Github</a>
              <a href='https://master--graceful-cucurucho-cb3f5f.netlify.app/'className='btn btn-primary' target='LIBRARY'>live Demo</a>
            </div>
      </article>
      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={COMMERCE} alt=""/>
        </div>
            <h3>FARMART</h3>
            <div className='portfolio_item-cta'>
              <a href='https://github.com/levy-web/farmart' className='btn'target=''>Github</a>
              <a href='https://farmart-delta.vercel.app/'className='btn btn-primary' target='COMMERCE'>live Demo</a>
            </div>
      </article>
      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={MAJUU} alt=""/>
        </div>
            <h3>SOKO-MAJUU</h3>
            <div className='portfolio_item-cta'>
              <a href='https://github.com/Dancunrandy/Soko-majuu' className='btn'target=''>Github</a>
              <a href='https://soko-majuu-mag7vbx45-dancunrandy.vercel.app/'className='btn btn-primary' target='SOKO-MAJUU'>live Demo</a>
            </div>
      </article>
    </div>
    </section>
  )
}

export default Portfolio