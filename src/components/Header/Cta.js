import React from 'react'
import Cv from '../../assets/Cv.PDF'
const Cta = () => {
  return (
    <div className='cta'>
        <a href={Cv} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary' >Let's Chat</a>
    </div>
  )
}

export default Cta