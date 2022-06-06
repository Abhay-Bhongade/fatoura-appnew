import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Secure from './components/Secure';
import Newsletter from './components/Newsletter';
import Footer from "./components/Footer"
import Signup from "./components/Signup"
import Signin from './components/Signin';
import Features from './components/Features';
import PageNotFound from './components/PageNotFound';
import FeaturesData from "./components/FeaturesData"



const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Home/>
      <Secure />
      <Features slides={FeaturesData} />
      <Pricing/>
      <Newsletter />
      <Contact/>
      <Footer />
      <Routes>
        <Route path='signup' element={<Signup />} />
        <Route path='signin' element={<Signin />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
