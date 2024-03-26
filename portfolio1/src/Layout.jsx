import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './componenets/Header/Header'
import Footer from './componenets/Footer/Footer'
import ScrollToTop from './componenets/Scrooltop'
function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <ScrollToTop/>
    <Footer />
    </>
  )
}

export default Layout