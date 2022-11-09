import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError;
  return (
    <div className='flex h-screen items-center justify-center text-center'>
      <div>
        <h1 className='text-6xl font-bold text-red-600'>404</h1>
        <p className='text-xl font-semibold'>Page Not Found</p>
        <p className='text-lg text-gray-600'>{error}</p>
        <button className='bg-red-800 text-white px-4 py-1 mt-3 rounded-md'><Link to='/'>Back to home</Link></button>
      </div>
    </div>
  )
}

export default Error