import React from 'react'

const Footer = () => {
  return (
    <>  
    <footer className='footer'>
        <div className="container py-md-5 py-4 ">
            <div className="row py-2">
                <div className="col-md-12">
                    <div className="d-flex justify-content-evenly align-items-center flex-row footer-f">
                        <a href="#" className='text-decoration-none text-white gilroy'>Sign up</a>
                        <a href="#" className='text-decoration-none text-white gilroy'>Sign in</a>
                        <a href="#" className='text-decoration-none text-white gilroy'>Terms and Conditions</a>
                        <a href="#" className='text-decoration-none text-white gilroy'>Privacy Policy</a>
                        <a href="#" className='text-decoration-none text-white gilroy'>Contact Us</a>
                    </div>
                    <div className="d-flex justify-content-center align-items-center py-5 footer-p">
                        <a href="#"><i className="fa-brands fa-facebook fs-3 text-white "></i></a>
                        <a href="#"><i className="fa-brands fa-instagram fs-3 mx-3 text-white "></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin-in fs-3 text-white "></i></a>      
                    </div>
                    <p className='text-center text-white'>Copyright @ IHTIRAF.Made with love by Brain Inventory.</p>
                </div>
            </div>
        </div>
        </footer>
    </>
  )
}

export default Footer