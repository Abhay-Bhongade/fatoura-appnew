import React from 'react'
import Contact from './Contact'
import Features from './Features'
import Footer from './Footer'
import Home from './Home'
import Newsletter from './Newsletter'
import Pricing from './Pricing'
import Secure from './Secure'
import FeaturesData from "./FeaturesData"
import Header from './Header'
import MyInvoices from './MyInvoices'
import Navbar from './Navbar'
import VerticalHeader from './VerticalHeader'
import MyReports from './MyReports'

const CompWrapper = () => {
  return (
    <>
        <Header/>
        <Home/>
        <Features slides={FeaturesData}/>
        <Secure/>
        <Pricing/>
        <Newsletter/>
        <Contact/>
        <Footer/>
       
    </>
  )
}

export default CompWrapper