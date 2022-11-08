import React, { useEffect, useState } from 'react'
import Loader from '../../Components/Loader'
import Service from '../../Components/Service'

const Services = () => {
  const [services,setServices] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
   fetch('http://localhost:5000/services')
   .then(res => res.json())
   .then(data => {
    setServices(data.data)
    setLoading(false)
   })
   .catch(e => console.log(e))
  },[])
  return (
    <div className='w-full '>
        {
            loading && <Loader/>
        }
      <h3 className='text-center text-5xl my-3'>My Services</h3>
      <div className='grid grid-cols-2 gap-5 my-10 w-full justify-center lg:grid-cols-3'>
      {
        services.map(service => <Service key={service._id} data = {service}/>) 
      }
      </div>
    </div>
  )
}

export default Services