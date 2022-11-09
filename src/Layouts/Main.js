import Footer from '../Shared/Footer/Footer'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Shared/Header/Header'

const Main = () => {
  return (
    <div>
        <Header/>
        <div className='max-w-7xl mx-auto px-10 xl:px-5'>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Main