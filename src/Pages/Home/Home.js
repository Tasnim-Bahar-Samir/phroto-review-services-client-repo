import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Service from '../../Components/Service'
import About from './About/About'
import Banner from './Banner/Banner'

const Home = () => {
  const [services,setServices] = useState([])
 useEffect(()=>{
  fetch('http://localhost:5000/limitedServices')
  .then(res => res.json())
  .then(data => setServices(data.data))
  .catch(e => console.log(e))
 },[])
 console.log(services)
  return (
    <div>
      <div className='mb-10'>
        <Banner/>
      </div>
      <div className='text-center'>
        <h2 className='text-2xl text-center text-red-800 my-3'>Services</h2>
         <div className='grid md:grid-cols-3 gap-4'>
          {
            services.map(service => <Service key={service._id} data = {service}/>)
          }
          
         </div>
         <button className="px-3 py-2 bg-slate-900 text-white mt-5"><Link to='/services'>More Services</Link></button>
      </div>
      <div className='mt-24 mb-52'>
        <h4 className='text-center text-xl text-red-800 mb-2 font-semibold'>About Me</h4>
        <About/>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Home