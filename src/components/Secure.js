import React from 'react'

const Secure = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                        <img src="/assests/section2.svg" className='section2  w-100' alt="fataoura_work" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='ms-5 fw-bold fs-4 text-end'> <i className="fa-solid fa-square-arrow-up-right"></i> fast and secure </div>
                        <h1 className='fw-bolder text-end secure-h'>Manage Invoices </h1>
                        <h1 className='fw-bolder text-end secure-h'> Securely with  </h1>
                        <h1 className='fw-bolder text-end secure-h'>Ease</h1>
                        <h4 className='text-end fw-bold'>Fatoura.work was built to serve <br /> freelancers and business owners <br /> with a complete suite of invoicing & <br /> payment tools to advance their <br /> business.
                        </h4>
                        <h4 className='text-end fw-bold'>Invoicing & Payments Every feature <br /> is geared towards accurate and <br/> secure invoicing and getting you <br /> paid.</h4>
                        <div className='d-flex justify-content-end'>
                        <div className="btn btn-outline-info text-dark py-3 px-5 mt-4 rounded button-r">
                            <span className="fw-bold">Start Now</span> <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Secure