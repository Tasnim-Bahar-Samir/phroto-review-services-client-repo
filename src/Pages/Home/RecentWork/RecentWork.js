import React from 'react'
import { motion } from 'framer-motion'
import img1 from '../../../assets/images/recent1.jpg'
import img2 from '../../../assets/images/recent2.jpg'
import img3 from '../../../assets/images/recent3.jpg'
import img4 from '../../../assets/images/recent4.jpg'
import img5 from '../../../assets/images/recent5.jpg'
import img6 from '../../../assets/images/recent6.jpg'
import './RecentWork.css'
const RecentWork = () => {
  return (
    <div>
        <div className=' columns-3 gap-2'>
            <figure className="zoom">
            <img className='py-3' src={img1} alt="" />
            </figure>
            <figure className="zoom">
            <img className='py-3 w-full'  src={img2} alt=""/>
            </figure>
            <figure className="zoom">
            <img src={img3} className='py-1' alt="" />
            </figure>
            <figure className='zoom'>
            <img src={img4} className='py-1' alt="" />
            </figure>
            <figure className="zoom">
            <img src={img5} className='py-1' alt="" />
            </figure>
            <figure className="zoom">
            <img src={img6} className='py-1' alt="" />
            </figure>
        </div>
    </div>
  )
}

export default RecentWork