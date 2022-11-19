import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>

      <NavBar/>
        <Outlet ></Outlet>
      <Footer/>
     
    </>
  )
}

export default Layout