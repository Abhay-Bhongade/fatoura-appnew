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
import Profile from './components/Profile';
import CompWrapper from './components/CompWrapper';
import Invoice from './components/Invoice';
import ProfilePage from './components/ProfilePage';
import MyDocument from './components/MyDocument';
import Register from './Pages/Register';



const App = () => {
  return (
    <>
      <BrowserRouter>
     
      <Routes>

      <Route path='/' element={<Register/>} />


      <Route path='/' element={<CompWrapper/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/profilepage' element={<ProfilePage/>} />
      <Route path='/invoice' element={<Invoice/>} />
      <Route path='/myDocument' element={<MyDocument/>} />
      <Route path='/pages/dashboard' element={<MyDocument/>} />
      <Route path='/myInvoices' element={<myInvoices/>} />
      <Route path='/pages/myReports' element={<MyDocument/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App



