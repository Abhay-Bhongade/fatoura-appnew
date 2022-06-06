import React from 'react'
import TextField from '@mui/material/TextField';

const Newsletter = () => {
    return (
        <>
            <section>
            <div className="container my-5">
                <div className="row py-5">
                    <div className="col-md-6">
                        <div>
                        <i className="fa-solid fa-square-arrow-up-right"></i><span className='fw-bolder fs-5 ms-2'>subscribe to our newsletter</span>
                        </div>
                        <h1 className='py-3 fw-bolder fs-1 '>Be the first to know</h1>
                        <div className="form-group">
                            <input type="email" className="form-control w-75 button-r py-3 border border-dark " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Email Address" />

                        </div>
                        <div className="btn btn-outline-info text-dark py-3 px-5 mt-3 rounded button-r">
                            <span className='fw-bold'>Subscribe</span> <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div>
                        <img src="/assests/section7.svg" className='section2 img-fluid w-100' alt="fataoura_work" />
                        </div>
                    </div>


                </div>
            </div>
            </section>
        </>
    )
}

export default Newsletter