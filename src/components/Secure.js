import React from 'react'

const Secure = () => {
    return (
        <div>
            <div className="container my-md-5 my-sm-3">
                <div className="row py-3">
                    <div className="col-md-6 order-last order-md-first">
                        <div>
                        <img src="/assests/section2.svg" className='section2  img-fluid w-100' alt="fataoura_work" />
                        </div>
                    </div>
                    <div className="col-md-6 order-first order-md-last">
                        <div className='ms-md-5 mb-md-3 fw-bold fs-4  text-md-end text-sm-start'> <i className="fa-solid fa-square-arrow-up-right"></i> fast and secure </div>

                        <h1 className='fw-bolder text-end secure-h d-none d-sm-block'>Manage Invoices Securely with <br/> Ease</h1>
                        <h1 className='fw-bolder text-start d-block d-sm-none py-3'>Manage Invoices Securely with Ease</h1>

                        <h4 className='text-end fw-bold d-none d-sm-block'>Fatoura.work was built to serve <br /> freelancers and business owners <br /> with a complete suite of invoicing & <br /> payment tools to advance their <br /> business.
                        </h4>
                        <h4 className='text-end fw-bold d-none d-sm-block'>Invoicing & Payments Every feature <br /> is geared towards accurate and <br/> secure invoicing and getting you <br /> paid.</h4>

                        <h4 className='text-start all-p fw-bold d-block d-sm-none'>Fatoura.work was built to serve  freelancers and business owners  with a complete suite of invoicing &  payment tools to advance their  business.
                        </h4>
                        <h4 className='text-start all-p fw-bold d-block d-sm-none '>Invoicing & Payments Every feature  is geared towards accurate and secure invoicing and getting you  paid.</h4>

                        <div className='d-flex justify-content-sm-start justify-content-md-end'>
                        <div className="btn btn-outline-info text-dark py-md-3 py-sm-2 px-5 mt-4 rounded button-r first-b">
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