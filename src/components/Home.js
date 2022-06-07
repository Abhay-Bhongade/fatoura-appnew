import React from 'react'
const Home = () => {
  return (
    <>
    <div className="container my-5" id='home'>
        <div className="row">
            <div className="col-md-12 text-center  my-3">

            <div className='fw-bolder fs-5'>
            <i className="fa-solid fa-square-arrow-up-right"></i> <span className='fw-bold fs-5'> Invoicing made simple </span>
            </div>

            <div className='py-4'> 
            <h1 className='fw-bolder display-5 all-h'>Use Fatoura and win back your time</h1> 
            </div>
                
            <div>

        <div className="btn btn-outline-info text-dark second-b text-white py-md-3 px-md-5 py-sm-2 px-md-2 mb-2 rounded button-r">
         <span className='fw-bold'>See All Features</span> <i className="fa-solid fa-arrow-right-long text-center"></i>
        </div>
        <div className="btn btn-outline-info text-dark py-md-3 px-md-5 py-sm-2 px-md-2 mb-2 ms-md-5 mx-2 rounded button-r button-h">
         <span className='fw-bold'>Start Now</span> <i className="fa-solid fa-arrow-right-long"></i>
        </div>
        </div>
        
            </div>
        </div>

       
        <div className="container-fluid">
        <div className="row my-5">
          <div className="section1">
          <img src="/assests/section1.png" className='img-fluid' alt="sectionone" />
        </div>
        </div>
        </div>
    </div>
        
    </>
  )
}

export default Home