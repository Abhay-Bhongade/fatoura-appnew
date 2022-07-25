import React from 'react'
import "./Profile.css"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Invoice from './Invoice';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link, useNavigate } from "react-router-dom"




const Navbar = () => {
    const navigate = useNavigate();
const moveToInvoice = () => {
    navigate('/invoice')
}

    const moveToProfilePage = ()=>{
        navigate('/profilepage')
    }
  return (
    <div>
        <nav className='border navbar navbar-expand-lg bg-white shadow py-3'>
                    <div className='d-flex align-items-center'
                    >
                        <Dropdown>
                            <Dropdown.Toggle className="btn btn-primary  mx-3 px-3 py-2 text-white second-b spanone lead button-r" >
                                Create New <i className="fa-solid fa-plus text-center ms-2"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='text-white text-center dropdownbg px-4 button-r2'>
                                <Dropdown.Item className='text-white' onClick={moveToInvoice}>Invoice</Dropdown.Item>
                                <Dropdown.Item className='text-white'>Bill</Dropdown.Item>
                                <Dropdown.Item className='text-white' >Purchase Order</Dropdown.Item>
                                <Dropdown.Item className='text-white' >Quote</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="btn border-0 text-dark px-4 first-b button-bord spanone " style={{ marginLeft: "43rem" }}>
                            <i className="fa-solid fa-globe fs-5"></i> <span>EN</span>
                        </div>


                        {/* <div className="btn border-0 text-dark px-4 first-b button-bord spanone">
                            <img src="./assests/brandlogo.png" alt="fatoura-logo1" className='img-fluid text-dark' width={32} height={32} /> <span>Hi, Abhay</span>
                        </div> */}
                        <Dropdown>
                            <Dropdown.Toggle  id="dropdown-basic" className="text-dark px-4 first-b button-bord spanone dropdownbgnone">
                            <img src="./assests/brandlogo.png" alt="fatoura-logo1" className='img-fluid text-dark' width={32} height={32} /> <span>Hi, Abhay</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu  className='text-white text-center dropdownbg px-5 button-r2'>
                                <Dropdown.Item className='text-white' onClick={moveToProfilePage}>My Profile</Dropdown.Item>
                                <Dropdown.Item className='text-white'>Subscription</Dropdown.Item>
                                <Dropdown.Item className='text-white'>Help</Dropdown.Item>
                                <Dropdown.Item className='text-white'>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </nav>
    </div>
  )
}

export default Navbar