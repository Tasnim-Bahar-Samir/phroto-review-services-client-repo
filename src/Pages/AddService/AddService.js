import React from 'react'
import toast from 'react-hot-toast';

const AddService = () => {
  const handleAddService= (e)=>{
    e.preventDefault()
    const form = e.target;
    const datefield = new Date()

    const service = {
      name:form.name.value,
      img:form.img.value,
      rating: form.rating.value,
      price: form.price.value,
      details : form.details.value,
      datefield:datefield
    }
    console.log(service)

    fetch('https://awesome-photography-server.vercel.app/services',{
      method:"POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(service)
    })
    .then(res => res.json())
    .then(data =>{
      if(data.success){
        toast.success(data.message)
        form.reset()
      }
      else{
        toast.error(data.error)
      }
    })
  }
  return (
    <div className='my-10 bg-white p-8 shadow-lg rounded-lg' >
        <form onSubmit={handleAddService}>
            <input className='w-full mb-2 rounded-md' name='name' placeholder='Service name' type="text" />
            <br />
            <input className='w-full mb-2 rounded-md' name='img' placeholder='Photo url' type="text" />
            <br />
           <div className='flex gap-6'>
            <input name='rating'  type="text" placeholder='Rating'/>
            <input name='price' type="text" placeholder='Price' />
           </div>
            <textarea className='mt-3 rounded-lg w-full' placeholder='Service details' name="details" id="" cols="30" rows="10"></textarea>
            <button className='block w-1/2 mx-auto py-3 mt-2 text-white rounded-md bg-red-800' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddService