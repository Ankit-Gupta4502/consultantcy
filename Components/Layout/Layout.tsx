import React from 'react'
import Header from './Header'
import Footer from './Footer'
interface types {
  children?: React.ReactNode | string | React.ReactNode[]
}
const Layout = ({ children }: types) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout