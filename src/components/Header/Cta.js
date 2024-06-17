import React from 'react';
// Corrected the path to match the actual file location and name
import SoftwareDevop from '../../assets/Software devop.pdf';

const Cta = () => {
  return (
    <div className='cta'>
      <a href={SoftwareDevop} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Chat</a>
    </div>
  );
};

export default Cta;
