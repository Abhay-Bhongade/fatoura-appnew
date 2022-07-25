import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom"
import { Redirect } from 'react-router-dom'
import useScrollListener from "../Hooks/useScrollListner"
import Scrollspy from 'react-scrollspy'


const Header = () => {
  const navigate = useNavigate();

  const handleSign = () => {
    // return <Redirect to='/signin'  />
    navigate('/signin');
  }

  const handleSiup = () => {
    // return <Redirect to='/signup'  />
    navigate('/signup');
  }

  

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);


    const mainNavLinks = document.querySelectorAll('nav a');
    window.onscroll = () => {
      const fromTop = window.scrollY + 200;
      mainNavLinks.forEach((link) => {

        if (link?.hash) {
          const section = document.querySelector(link?.hash);
          if (section?.offsetTop <= fromTop && section?.offsetTop + section?.offsetHeight > fromTop) {
            link.classList.add('current');
          } else {
            link.classList.remove('current');
          }
        }
      });
    };
  }, [scroll.y, scroll.lastY]);






  return (

    <header className={navClassList.join(" ")}>
      <nav className="navbar navbar-expand-lg bg-white shadow">
        <div className="container">
          <a className="navbar-brand" href="#"> <img src="./assests/fatoura-logo.png" className='h-logo' alt="fatoura-logo" /> </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mx-md-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link  text-dark gilroy" href="#home" >Home</a>
              </li>

              <li className="nav-item mx-md-4">
                <a className="nav-link  text-dark gilroy" href="#pricing">Pricing</a>
              </li>

              <li className="nav-item">
                <a className="nav-link  text-dark gilroy" href="#contact">Contact Us</a>
              </li>


            </ul>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>


              <Link to="/signin"> <button className="btn btn-outline-info fw-bold text-dark px-4 first-b button-bord spanone gilroy" type="submit" onClick={handleSign}>Sign in</button> </Link>


              <Link to="/signup"> <button className="btn btn-primary fw-bold mx-3 px-4 text-white second-b spanone gilroy" type="submit" onClick={handleSiup}>Sign up</button> </Link>

              <div className="btn btn-outline-info text-dark px-4 first-b button-bord spanone">
                <i className="fa-solid fa-globe"></i> <span>EN</span>
              </div>

            </form>

          </div>
        </div>
      </nav>


    </header>
  )
}

export default Header