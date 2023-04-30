import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillDribbbleCircle} from 'react-icons/ai'
function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href=" https://www.linkedin.com/in/daniel-randy-mutie-774b63b1/" target="_blank"><BsLinkedin/></a>
        <a href=" https://github.com/Dancunrandy" target="_blank"><AiFillGithub/></a>
        <a href=" https://dribbble.com " target="_blank"><AiFillDribbbleCircle/></a>
    </div>
  )
}

export default HeaderSocials