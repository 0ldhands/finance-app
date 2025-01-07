import React from 'react'
import { Outlet } from 'react-router-dom'
import '../css/Root.css'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

const RootLayout = () => {
  return (
    <div>
      <Header />
      <div className='root-container'>
        <Outlet />
      </div>
      <Footer/>
    </div>

  )
}

export default RootLayout