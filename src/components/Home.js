import React from 'react'
const Home = () => {
  return (
    <>
    <div className="container my-4" id='home'>
        <div className="row">
            <div className="col-md-12 text-center  my-3">

            <div className='fw-bolder fs-5'>
            <img src="./assests/Arrow.svg" width="18" alt="arrow" /> <span className='fw-bold fs-5 '> Invoicing made simple </span>
            </div>

            <div className='py-4'> 
            <h1 className=' display-5 all-h'>Use Fatoura and win back your time</h1> 
            </div>
                
            <div>

        <div className="btn btn-outline-info text-dark second-b text-white py-md-3 px-md-5 py-sm-2 px-md-2 mb-2 rounded buttonone button-bord">
         <span className='fw-bold spanone'>See All Features</span> <i className="fa-solid fa-arrow-right-long text-center"></i>
        </div>
        <button className="btn btn-outline-info fw-bold text-dark py-md-3 px-md-5 onetwo px-md-2 mb-2 ms-md-5 mx-2 first-b button-bord buttonone spanone" type="submit">Start Now <i className="fa-solid fa-arrow-right-long text-center"></i></button>
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