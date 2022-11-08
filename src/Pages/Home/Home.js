import React, { useEffect, useState } from 'react'
import Service from '../../Components/Service'

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
      
      <div>
        <h2 className='text-2xl text-center'>Services</h2>
         <div className='grid md:grid-cols-3 gap-4'>
          {
            services.map(service => <Service key={service._id} data = {service}/>)
          }
          
         </div>
         <button className="px-3 py-2 bg-slate-900 text-white mt-5">More Services</button>
      </div>
    </div>
  )
}

export default Home