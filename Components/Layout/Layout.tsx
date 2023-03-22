import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify'
interface types {
  children?: React.ReactNode 
}
const Layout = ({ children }: types) => {
  return (
    <>
      <ToastContainer/>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout