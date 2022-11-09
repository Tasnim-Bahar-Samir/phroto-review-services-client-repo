import React from 'react'

const AddService = () => {
  return (
    <div className='my-10 bg-white p-8 shadow-lg rounded-lg' >
        <form >
            <input className='w-full mb-2 rounded-md' placeholder='Service name' type="text" />
            <br />
            <input className='w-full mb-2 rounded-md' placeholder='Photo url' type="text" />
            <br />
           <div className='flex gap-6'>
            <input  type="text" placeholder='Rating'/>
            <input type="text" placeholder='Price' />
           </div>
            <textarea className='mt-3 rounded-lg w-full' placeholder='Service details' name="" id="" cols="30" rows="10"></textarea>
            <button className='block w-1/2 mx-auto py-3 mt-2 text-white rounded-md bg-red-800' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddService