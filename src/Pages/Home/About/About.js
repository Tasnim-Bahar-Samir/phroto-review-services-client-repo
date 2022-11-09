import React from 'react'
import img1 from '../../../assets/images/aboutImg1.jpg'
import img2 from '../../../assets/images/aboutImg 2.jpg'

const About = () => {
  return (
    <div className='relative flex flex-col md:flex-row justify-between items-center'>
        <div className='md:pl-24 md:w-1/2'>
            <img className='' src={img2} alt="" />
            <img className=' absolute top-28 left-5 mb-20' src={img1} alt="" />
        </div>
        <div className='md:w-1/2 md:mt-24 mt-44'>
            <p>A photographer capture the life.I had started photographing as a fassionate way.Now im a professional photographer, videographer and editor also.I do all these thing from my heart.I have done a lot of projects.I always love to do these things.</p>
        </div>
        
    </div>
  )
}

export default About