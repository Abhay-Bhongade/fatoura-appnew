import React,{useState,useEffect} from 'react'
import {Link,NavLink,useNavigate} from "react-router-dom"
import useScrollListener from "../Hooks/useScrollListner"

const Header = () => {

  const handleSubmit = (e)=>{
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
  }, [scroll.y, scroll.lastY]);



  return (
    <header className={navClassList.join(" ")}>
        <nav className="navbar navbar-expand-lg bg-white shadow" >
  <div className="container">
    <a className="navbar-brand" href="#home"> <img src="./assests/fatoura-logo.png" className='h-logo' alt="fatoura-logo" /> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-md-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a fw-bolder text-dark" href="#home" >Home</a>
        </li>
        <li className="nav-item mx-md-5">
          <a className="nav-a fw-bolder text-dark" href="#pricing">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-a fw-bolder text-dark" href="#contact">Contact Us</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        
        <NavLink to={`/auth/signin`}>
        <button className="btn btn-outline-info fw-bold text-dark px-3 first-b" type="submit">Sign in</button>
        </NavLink>
        
        <button className="btn btn-primary fw-bold mx-2 text-white second-b" type="submit">Sign up</button>
        <div className="btn btn-outline-info text-dark px-3 first-b">
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