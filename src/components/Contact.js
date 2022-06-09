import React from 'react'

const Contact = () => {
  return (
    <>
    <section className="contact" id='contact'>
      <div className="container py-md-5 py-sm-1">
        <div className="row py-md-5 py-sm-2">
          <div className="col-md-6 pt-3">
            <div>
            <img src="./assests/Arrow.svg" width="18" alt="arrow" /><span className='fw-bold fs-5 ms-2'>Contact Us</span>
            </div>
            <h2 className='fs-1 fw-bolder display-1 mt-4'>Let's Get in Touch!</h2>

          </div>
          <div className="col-md-4 pt-3">

            <div className="form-group">
              <input type="text" className="form-control border border-dark py-md-3 py-sm-2 button-r" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" />
            </div>

            <div className="form-group my-4">
              <input type="password" className="form-control border border-dark py-md-3 py-sm-2 button-r" id="exampleInputPassword1" placeholder="Email Address" />
            </div>

            <div className="form-group">
              <textarea className="form-control border border-dark button-r" id="exampleFormControlTextarea1" rows="6" placeholder='Message'></textarea>
            </div>

            {/* <div className="btn btn-outline-info text-dark py-md-3 py-sm-2 px-5 my-4 rounded border border-dark button-r ">
         <span>Send</span>
        </div> */}
         <button className="firstone px-3 first-b my-3 py-2 py-md-3 spanone gilroy" type="submit">Send</button>

          </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Contact