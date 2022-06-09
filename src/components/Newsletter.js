import React from 'react'
import TextField from '@mui/material/TextField';

const Newsletter = () => {
    return (
        <>
            <section>
            <div className="container my-md-5 my-sm-3">
                <div className="row py-5">
                    <div className="col-md-6">
                        <div>
                        <img src="./assests/Arrow.svg" width="18" alt="arrow" /><span className='fw-bolder fs-5 ms-2'>subscribe to our newsletter</span>
                        </div>
                        <h1 className='py-3 fw-bolder'>Be the first to know</h1>
                        <div className="form-group">
                            <input type="email" className="form-control w-75 button-r py-md-3 py-sm-2 border border-dark " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Email Address" />

                        </div>
                        
                        <button className="btn btn-outline-info fw-bold text-dark py-md-3 px-md-5 onetwo px-md-2 mb-2  first-b button-bord buttonone spanone mt-3" type="submit">Subscribe<i className="fa-solid fa-arrow-right-long text-center ps-2"></i></button>
                    </div>
                    <div className="col-md-6">
                    <div>
                        <img src="/assests/section7.svg" className='section2 img-fluid common-image' alt="fataoura_work" />
                        </div>
                    </div>


                </div>
            </div>
            </section>
        </>
    )
}

export default Newsletter