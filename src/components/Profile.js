// // import React from 'react'
// // import "./Profile.css"
// // import Menu from '@mui/material/Menu';
// // import MenuItem from '@mui/material/MenuItem';

// // const Profile = () => {
// //     const [anchorEl, setAnchorEl] = React.useState(null);
// //     const open = Boolean(anchorEl);
// //     const handleClick = (event) => {
// //         setAnchorEl(event.currentTarget);
// //     };
// //     const handleClose = () => {
// //         setAnchorEl(null);
// //     };

// //     return (
// //         <>

// //             <div className="vertical-nav second-b ps-2" id="sidebar">
// //                 <div className="py-3 px-3 mb-3 second-b">
// //                     <div className="media d-flex align-items-center second-b">
// //                         <a href=""> <img src="./assests/fatoura-logo1.png" width={180} height={75} alt="fatoura-logo1" className='profile-logo' /> </a>
// //                     </div>
// //                 </div>
// //                 <ul className="nav flex-column second-b mb-0 ">

// //                     <li className="nav-item">
// //                         <a href="#" className="nav-link text-white">
// //                             <img src="./assests/Mask Group 7.svg" className='me-2' alt="dashboard-logo" />
// //                             Dashboard
// //                         </a>
// //                     </li>

// //                     <li className="nav-item my-3">
// //                         <a href="#" className="nav-link text-white">
// //                             <img src="./assests/Mask Group 392.svg" className='me-2' alt="dashboard-logo" />
// //                             My Documents
// //                         </a>
// //                     </li>

// //                     <li className="nav-item">
// //                         <a href="#" className="nav-link text-white">
// //                             <img src="./assests/Mask Group 393.svg" className='me-2' alt="dashboard-logo" />
// //                             My Reports
// //                         </a>
// //                     </li>

// //                 </ul>
// //             </div>




// //             <div className="page-content" id="content">
// //                 <nav className='border navbar navbar-expand-lg bg-white shadow py-3'>
// //                     <div className='d-flex align-items-center'
// //                     >
// //                         <button className="btn btn-primary  mx-3 px-3 py-2 text-white second-b spanone lead button-r" type="button" id="basic-button"
// //                             aria-controls={open ? 'basic-menu' : undefined}
// //                             aria-haspopup="true"
// //                             aria-expanded={open ? 'true' : undefined}
// //                             onClick={handleClick}>Create New <i className="fa-solid fa-plus text-center ms-2"></i></button>

// //                         <Menu
// //                             id="demo-positioned-menu1"
// //                             aria-labelledby="demo-positioned-button"
// //                             anchorEl={anchorEl}
// //                             open={open}
// //                             onClose={handleClose}
// //                             anchorOrigin={{
// //                                 vertical: 'top',
// //                                 horizontal: 'left',
// //                             }}
// //                             transformOrigin={{
// //                                 vertical: 'top',
// //                                 horizontal: 'left',
// //                             }}
// //                         >
// //                             <div className='menuData  text-white'>
// //                                 <ul className='text-center button-r2 px-4 '>
// //                                     <li className="nav-item py-1">Invoice</li>
// //                                     <li className="nav-item py-1">Bill</li>
// //                                     <li className="nav-item py-1">Quote</li>
// //                                     <li className="nav-item py-1">Purchase Order</li>
// //                                 </ul>
// //                             </div>
// //                         </Menu>



// //                         <div className="btn border-0 text-dark px-4 first-b button-bord spanone " style={{ marginLeft: "43rem" }}>
// //                             <i className="fa-solid fa-globe fs-5"></i> <span>EN</span>
// //                         </div>

// //                         <div className="btn border-0 text-dark px-4 first-b button-bord spanone"
// //                             id="demo-positioned-button"
// //                             aria-controls={open ? 'demo-positioned-menu' : undefined}
// //                             aria-haspopup="true"
// //                             aria-expanded={open ? 'true' : undefined}
// //                             onClick={handleClick}>
// //                             <img src="./assests/brandlogo.png" alt="fatoura-logo1" className='img-fluid text-dark' width={32} height={32} /> <span>Hi, Abhay</span>
// //                         </div>



// //                         <Menu
// //                             id="demo-positioned-menu"
// //                             aria-labelledby="demo-positioned-button"
// //                             anchorEl={anchorEl}
// //                             open={open}
// //                             onClose={handleClose}
// //                             anchorOrigin={{
// //                                 vertical: 'top',
// //                                 horizontal: 'left',
// //                             }}
// //                             transformOrigin={{
// //                                 vertical: 'top',
// //                                 horizontal: 'left',
// //                             }}
// //                         >
// //                             <div className='menuData  text-white'>
// //                                 <ul className='text-center button-r2 px-4 '>
// //                                     <li className="nav-item py-1">My Profile</li>
// //                                     <li className="nav-item py-1">Subscription</li>
// //                                     <li className="nav-item py-1">Help</li>
// //                                     <li className="nav-item py-1">Logout</li>
// //                                 </ul>
// //                             </div>
// //                         </Menu>
// //                     </div>
// //                 </nav>






// //                 <section className='bg-light border border-danger my-3 mx-4 button-r2'>
// //                     <div className="container">
// //                         <div className="row border border-dark">
// //                             <div className="col-md-6 offset-md-6">
// //                                     <div className='gilroy all-span mb-2'>Profile Picture</div>
// //                                     <div className='d-flex flex-row justify-content-start'>
// //                                         <img src="./assests/fatoura-logo.png" width={120} height={120} alt="fatoura-logo1" className='profile-logo rounded-circle  b-image' />
// //                                         <div className='d-flex flex-column mt-4'>
// //                                             <button className="btn btn-white  mx-3 px-4 py-1 text-white second-b spantwo lead button-r2 " type="submit">Change</button>
// //                                             <button className="btn btn-outline-info text-dark mx-3 px-4 py-1 mt-2 first-b button-bord spanone  button-r2 " type="submit">Remove</button>
// //                                         </div>
// //                                     </div>
// //                                     </div>
// //                                     </div>



// //                                     </div>
// //                                 </section>



// //                                     <div className='mt-2'>
// //                                         <span className='fw-bold all-span me-auto'>Personal Information</span> <button className="btn btn-primary   px-5 py-1 text-white second-b spanone lead button-r2 " type="submit" style={{ marginLeft: "43rem" }} >Edit</button>
// //                                     </div>



// //                                     {/* <div className="col-md-6">
// //                                         <div className="row">
// //                                             <div className="col">
// //                                                 <label for="exampleInputEmail1" className="form-label">First Name</label>
// //                                                 <input type="text" className="form-control button-r " placeholder="First name" aria-label="First name" />
// //                                             </div>
// //                                             <div className="col">
// //                                                 <label for="exampleInputEmail2" className="form-label">Last Name</label>
// //                                                 <input type="text" className="form-control button-r " placeholder="Last name" aria-label="Last name" />
// //                                             </div>
// //                                         </div>

// //                                         <div className="row my-3">
// //                                             <div className="col">
// //                                                 <label for="exampleInputEmail1" className="form-label">Email Address</label>
// //                                                 <input type="email" className="form-control button-r " placeholder="a.bhongade@braininventory.com" aria-label="First name" />
// //                                             </div>
// //                                             <div className="col">
// //                                                 <label for="exampleInputEmail1" className="form-label">Contact Number</label>
// //                                                 <input type="tel" className="form-control button-r " placeholder="9325297363" aria-label="Last name" />
// //                                             </div>
// //                                             <div className='my-3'>
// //                                                 <span className='fw-bold all-span'>Password Settings</span> <span className="editPen second-b"> <i className="fa-solid fa-pen text-white"></i> </span>
// //                                             </div>
// //                                         </div>
// //                                     </div>
// //                                     </div>
// //                                     </div>
// //                                     </div> */}














// //                                     {/* <div className="col-md-12 mt-3">
// //                                         <div className='gilroy all-span mb-2'>Company Logo</div>
// //                                         <div className='d-flex flex-row justify-content-start'>
// //                                             <img src="./assests/fatoura-logo.png" width={120} height={120} alt="fatoura-logo1" className='profile-logo rounded-circle  b-image' />
// //                                             <div className='d-flex flex-column mt-4'>
// //                                                 <button className="btn btn-white  mx-3 px-4 py-1 text-white second-b spantwo lead button-r2 " type="submit">Change</button>
// //                                                 <button className="btn btn-outline-info text-dark mx-3 px-4 py-1 mt-2 first-b button-bord spanone  button-r2 " type="submit">Remove</button>
// //                                             </div>
// //                                         </div>
// //                                         <div className='mt-2'>
// //                                             <span className='fw-bold all-span me-auto'>Company Settings</span> <button className="btn btn-primary  px-5 py-1 text-white second-b spanone lead button-r2 " type="submit" style={{ marginLeft: "10rem" }}>Edit</button>
// //                                         </div>
// //                                         <label for="exampleInputEmail1" className="form-label">Company Name</label>
// //                                         <input type="text" className="form-control button-r" id="validationCustom02" placeholder='Fatoura' />
// //                                         <label for="exampleInputEmail1" className="form-label mt-3">Entity ID</label>
// //                                         <input type="text" className="form-control  button-r " id="validationCustom02" placeholder='DAJKD32EOU' />

// //                                         <div className="mb-3">
// //                                             <label for="exampleFormControlTextarea1" className="form-label mt-3">Company Address</label>
// //                                             <textarea className="form-control buttonone" id="exampleFormControlTextarea1" rows="3"></textarea>
// //                                         </div>

// //                                         <div className="row">
// //                                             <div className="col">
// //                                                 <label for="exampleInputEmail1" className="form-label">Tax Number</label>
// //                                                 <input type="text" className="form-control button-r" placeholder="Tax Number" aria-label="First name" />
// //                                             </div>
// //                                             <div className="col">
// //                                                 <label for="exampleInputEmail2" className="form-label">Currency Selection</label>
// //                                                 <select class="form-select button-r" aria-label="Default select example">
// //                                                     <option selected>Select Value</option>
// //                                                     <option value="1">One</option>
// //                                                     <option value="2">Two</option>
// //                                                     <option value="3">Three</option>
// //                                                 </select>
// //                                             </div>
// //                                         </div>


// //                                         <div className='my-2'>
// //                                             <label for="exampleInputEmail2" className="form-label">Decimal Settings</label>
// //                                         </div>

// //                                         <div className='my-1 d-flex align-items-center flex-row '>

// //                                             <div class="form-check">
// //                                                 <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
// //                                                 <label class="form-check-label" for="flexRadioDefault1">
// //                                                     2 Decimal
// //                                                 </label>
// //                                             </div>
// //                                             <div class="form-check ms-2">
// //                                                 <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
// //                                                 <label class="form-check-label" for="flexRadioDefault2">
// //                                                     3 Decimal
// //                                                 </label>
// //                                             </div>
// //                                         </div>

// //                                         <div> <span className='fw-bold all-span'>QR Code Settings</span> </div>

// //                                         <label for="exampleInputEmail1" className="form-label">Heading</label>
// //                                         <input type="text" className="form-control button-r" id="validationCustom02" />

// //                                         <div className='all-span mb-2'>Image</div>
// //                                         <div className='d-flex flex-row justify-content-start'>
// //                                             <img src="./assests/fatoura-logo.png" width={120} height={120} alt="fatoura-logo1" className='profile-logo rounded-circle  b-image' />
// //                                             <div className='d-flex flex-column mt-4'>
// //                                                 <button className="btn btn-white  mx-3 px-4 py-1 text-white second-b spantwo lead button-r2 " type="submit">Change</button>
// //                                                 <button className="btn btn-outline-info text-dark mx-3 px-4 py-1 mt-2 first-b button-bord spanone  button-r2 " type="submit">Remove</button>
// //                                             </div>
// //                                         </div>
// //                                         <div className='mt-3'>
// //                                             <span className='fw-bold all-span me-auto'>E-Sign Settings </span>
// //                                             <div className='d-flex flex-row justify-content-start mt-2'>
// //                                                 <img src="./assests/fatoura-logo.png" width={120} height={120} alt="fatoura-logo1" className='profile-logo rounded-circle  b-image' />
// //                                                 <div className='d-flex flex-column mt-4 marginStart'>
// //                                                     <button className="btn btn-white  mx-3 px-4 py-1 text-white second-b spantwo lead button-r2 " type="submit">Change</button>
// //                                                     <button className="btn btn-outline-info text-dark mx-3 px-4 py-1 mt-2 first-b button-bord spanone  button-r2 " type="submit">Remove</button>
// //                                                 </div>
// //                                             </div>
// //                                         </div>

// //                                         <div className="container my-5">
// //                                             <div className="row border border-warning">
// //                                                 <div className="col-md-12">
// //                                                     <div className='mb-3'>
// //                                                         <span className='fw-bold all-span'>PayPal Payment Settings</span> <a href="" className='ms-1'>How to</a>
// //                                                     </div>
// //                                                     <p>This is a Pro feature. Upgrade your account to configure these settings</p>

// //                                                 </div>
// //                                             </div>
// //                                         </div>


// //                                     </div>



// //                                 </div>

// //                         </div>
// //  */}









// <nav className='border navbar navbar-expand-lg bg-white shadow py-3'>
//     <div className='d-flex align-items-center'
//     >
//         <button className="btn btn-primary  mx-3 px-3 py-2 text-white second-b spanone lead button-r" type="button"
//         >Create New <i className="fa-solid fa-plus text-center ms-2"></i></button>

//         {/* <div className='menuData  text-white'>
//                                 <ul className='text-center button-r2 px-4 '>
//                                     <li className="nav-item py-1">Invoice</li>
//                                     <li className="nav-item py-1">Bill</li>
//                                     <li className="nav-item py-1">Quote</li>
//                                     <li className="nav-item py-1">Purchase Order</li>
//                                 </ul>
//                             </div> */}




//         <div className="btn border-0 text-dark px-4 first-b button-bord spanone " style={{ marginLeft: "43rem" }}>
//             <i className="fa-solid fa-globe fs-5"></i> <span>EN</span>
//         </div>

//         <div className="btn border-0 text-dark px-4 first-b button-bord spanone">
//             <img src="./assests/brandlogo.png" alt="fatoura-logo1" className='img-fluid text-dark' width={32} height={32} /> <span>Hi, Abhay</span>
//         </div>



//         {/* <div className='menuData  text-white'>
//                                 <ul className='text-center button-r2 px-4 '>
//                                     <li className="nav-item py-1">My Profile</li>
//                                     <li className="nav-item py-1">Subscription</li>
//                                     <li className="nav-item py-1">Help</li>
//                                     <li className="nav-item py-1">Logout</li>
//                                 </ul>
//                             </div> */}

//     </div>
// </nav>













// //         </>
// //     )
// // }

// // export default Profile


// {/* <div className='ulb buttonone pb-2 mb-3'>
// <ul className='ulbg d-flex justify-content-between px-3  mb-3 fw-bold text-white py-3 buttonone'>
//     <li>Item Name</li>
//     <li>SKU</li>
//     <li>Quantity</li>
//     <li>Unit Price</li>
//     <li>Total Amount</li>
//     <li>Tax</li>
//     <li>Actions</li>
// </ul>
// {/* <p className='text-center'>No Items added</p> */}
// <ul className=' d-flex justify-content-between px-3  mb-3 fw-bold text-dark py-3 buttonone'>
//     <li>Apple</li>
//     <li>1</li>
//     <li>10</li>
//     <li>$30.00</li>
//     <li>$300.00</li>
//     <li className='btn btn-white  px-4 py-1 text-white second-b spantwo lead button-r2'>No Tax</li>
//     <li><span className="spanbgbutton"> <i class="fa-solid fa-pen-to-square"></i> </span> <span className="spanbgbutton2"><i class="fa-solid fa-trash-can"></i></span></li>
// </ul>
// <div className='d-flex justify-content-start align-items-center mb-3 ms-3'>
//     <button className="btn btn-white  mx-1 px-4 py-1 mt-2 text-white second-b spantwo lead button-r2 " type="button"><i class="fa-solid fa-plus me-2"></i>Add more items</button>


//     <div className='p-3 bg-white' style={{ width: 900, height: 200 }}>
//         <h5>Add New item</h5>
//         <div className='d-flex justify-content-around align-items-center'>
//             <div className="col mx-3">
//                 <label for="exampleInputEmail1" className="form-label fw-bold"> Item Name</label>
//                 <input type="text" className="form-control button-r sectionbg text-dark" onChange={(e) => setFormValues(e.target.value)} />
//             </div>
//             <div className="col mx-3">
//                 <label for="exampleInputEmail1" className="form-label fw-bold"> SKU</label>
//                 <input type="text" className="form-control button-r sectionbg text-dark" onChange={(e) => setFormValues(e.target.value)} />
//             </div>
//             <div className="col mx-3">
//                 <label for="exampleInputEmail1" className="form-label fw-bold">Quantity</label>
//                 <input type="number" className="form-control button-r sectionbg text-dark" placeholder='0' onChange={(e) => setFormValues(e.target.value)} />
//             </div>
//             <div className="col mx-3">
//                 <label for="exampleInputEmail1" className="form-label fw-bold">Unit Price</label>
//                 <input type="text" className="form-control button-r sectionbg text-dark" placeholder='0' onChange={(e) => setFormValues(e.target.value)} />
//             </div>
//         </div>
//         <div className='d-flex justify-content-start mt-4 ms-3'>
//             <button className="btn btn-white  mx-1 px-4 py-1  text-white second-b spantwo lead button-r2 " type="button" onClick={addItem}>Add</button>

//             <button className="btn btn-outline-info text-dark mx-1 px-5 py-1 first-b button-bord spanone  button-r2 invoiceButton" type="button">Cancle</button>
//         </div>


//     </div>


//     <button className="btn btn-white  mx-1 px-4 py-1 mt-2 text-white second-b spantwo lead button-r2 " type="submit">Save item list</button>
// </div>
// </div> */}