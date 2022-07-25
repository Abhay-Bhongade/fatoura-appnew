import React,{useEffect} from 'react'
import "./Profile.css"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Invoice from './Invoice';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link, useNavigate } from "react-router-dom"
import Navbar from './Navbar';
import {useSelector} from 'react-redux'
import {useForm} from "react-hook-form"
import VerticalHeader from './VerticalHeader';



const ProfilePage = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();
    const moveToInvoice = () => {
        navigate('/invoice')
    }


    const {register,handleSubmit,formState:{errors},reset} = useForm();

    const myData = useSelector((state)=>state.signupReducers.list[0]) 
    console.log(myData);

    useEffect(() => {
        reset({
            firstName: myData.firstName,
            lastName: myData.lastName,
            email : myData.email,
            mobile : myData.mobile
        })
    }, [myData])




    return (
        <>
            <VerticalHeader/>



            <div className="page-content" id="content">
                <Navbar/>




                <section className='p-5 sectionbg my-4 mx-5 button-r2'>
                    <div className="container bg-white p-4 button-r2">
                        <div className="row">
                            <div className="col-md-6">
                                <div className='fw-bold all-span mb-2'>Profile Picture</div>
                                <div className='d-flex flex-row justify-content-start'>
                                    <img src="./assests/fatoura-logo.png" width={120} height={120} alt="fatoura-logo1" className='profile-logo rounded-circle  b-image' />
                                    <div className='d-flex flex-column mt-4'>

                                        <button className=" btn btn-primary mx-3 px-4 py-1  text-white second-b spanone lead button-r2" type="button">Change</button>

                                        <button className="btn btn-outline-info text-dark mx-3 px-4 py-1 mt-2 first-b button-bord spanone  button-r2 " type="submit">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div>
                                    <span className='fw-bold all-span'>Personal Information</span>
                                    <button className=" btn btn-primary   px-5 py-1 text-white second-b spanone lead button-r2" type="button" style={{ marginLeft: "35rem" }}>Edit</button>
                                </div>

                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                                    <input type="text" {...register('firstName')} className="form-control button-r sectionbg text-dark"   />
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail2" className="form-label">Last Name</label>
                                    <input type="text" className="form-control button-r sectionbg text-dark" {...register('lastName')}   />
                                </div>
                            </div>

                            <div className="row my-3">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                                    <input type="email" className="form-control button-r sectionbg text-dark " {...register('email')}   />
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Contact Number</label>
                                    <input type="tel" className="form-control button-r sectionbg text-dark" {...register('mobile')}    />
                                </div>
                                <div className='my-3'>
                                    <span className='fw-bold all-span'>Password Settings</span> <span className="editPen second-b"> <i className="fa-solid fa-pen text-white"></i> </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container container bg-white p-5 button-r2 mt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className='gilroy all-span mb-2'>Company Logo</div>
                                <div className='d-flex flex-row justify-content-start'>
                                    <img src="./assests/fatoura-logo.png" width={120} height={120} alt="fatoura-logo1" className='profile-logo rounded-circle  b-image' />
                                    <div className='d-flex flex-column mt-4'>
                                        <button className="btn btn-white  mx-3 px-4 py-1 text-white second-b spantwo lead button-r2 " type="submit">Change</button>
                                        <button className="btn btn-outline-info text-dark mx-3 px-4 py-1 mt-2 first-b button-bord spanone  button-r2 " type="submit">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className='mt-2'>
                                    <span className='fw-bold all-span me-auto'>Company Settings</span> <button className="btn btn-primary  px-5 py-1 text-white second-b spanone lead button-r2 " type="submit" style={{ marginLeft: "10rem" }}>Edit</button>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="exampleInputEmail1" className="form-label">Company Name</label>
                                <input type="text" className="form-control button-r sectionbg text-dark" id="validationCustom02" placeholder='Fatoura' />
                                <label htmlFor="exampleInputEmail1" className="form-label mt-3">Entity ID</label>
                                <input type="text" className="form-control  button-r sectionbg text-dark " id="validationCustom02" placeholder='DAJKD32EOU' />

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label mt-3">Company Address</label>
                                    <textarea className="form-control buttonone sectionbg text-dark" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Tax Number</label>
                                        <input type="text" className="form-control button-r sectionbg text-dark" placeholder="Tax Number" aria-label="First name" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="exampleInputEmail2" className="form-label">Currency Selection</label>
                                        <select className="form-select button-r" aria-label="Default select example">
                                            <option selected>Select Value</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>


                                <div className='my-2'>
                                    <label htmlFor="exampleInputEmail2" className="form-label">Decimal Settings</label>
                                </div>

                                <div className='my-1 d-flex align-items-center flex-row '>

                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            2 Decimal
                                        </label>
                                    </div>
                                    <div className="form-check ms-2">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            3 Decimal
                                        </label>
                                    </div>
                                </div>

                                <div> <span className='fw-bold all-span'>QR Code Settings</span> </div>

                                <label htmlFor="exampleInputEmail1" className="form-label">Heading</label>
                                <input type="text" className="form-control button-r sectionbg text-dark" id="validationCustom02" />

                                <div className='all-span mb-2'>Image</div>
                                <div className='d-flex flex-row justify-content-start'>
                                    <img src="./assests/fatoura-logo.png" width={120} height={120} alt="fatoura-logo1" className='profile-logo rounded-circle  b-image' />
                                    <div className='d-flex flex-column mt-4'>
                                        <button className="btn btn-white  mx-3 px-4 py-1 text-white second-b spantwo lead button-r2 " type="submit">Change</button>
                                        <button className="btn btn-outline-info text-dark mx-3 px-4 py-1 mt-2 first-b button-bord spanone  button-r2 " type="submit">Remove</button>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <span className='fw-bold all-span me-auto'>E-Sign Settings </span>
                                    <div className='d-flex flex-row justify-content-start mt-2'>
                                        <img src="./assests/fatoura-logo.png" width={120} height={120} alt="fatoura-logo1" className='profile-logo rounded-circle  b-image' />
                                        <div className='d-flex flex-column mt-4 marginStart'>
                                            <button className="btn btn-white  mx-3 px-4 py-1 text-white second-b spantwo lead button-r2 " type="submit">Change</button>
                                            <button className="btn btn-outline-info text-dark mx-3 px-4 py-1 mt-2 first-b button-bord spanone  button-r2 " type="submit">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="container bg-white p-5 button-r2 mt-5">
                        <div className="row">
                            <div className="col-md-12">
                                <div className='mb-3'>
                                    <span className='fw-bold all-span'>PayPal Payment Settings</span> <a href="" className='ms-1'>How to</a>
                                </div>
                                <p>This is a Pro feature. Upgrade your account to configure these settings</p>

                            </div>
                        </div>
                    </div>











                </section>
            </div>



        </>
    )
}

export default ProfilePage