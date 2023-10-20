import React from 'react'
import Software  from '../../assets/Software devop.pdf'
const Cta = () => {
  return (
    <div className='cta'>
        <a href={Software} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary' >Let's Chat</a>
    </div>
  )
}

export default Cta