import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
interface types {
  children?: React.ReactNode | string | React.ReactNode[]
}
const Layout = ({ children }: types) => {
  const [toggle, setToggle] = useState<boolean>(false)
  const router = useRouter()
  useEffect(() => {
    if (router.pathname.includes('register') || router.pathname.includes('login')) {
      setToggle(true)
    }
  }, [router])

  if (toggle) {
    return <> {children} </>
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout