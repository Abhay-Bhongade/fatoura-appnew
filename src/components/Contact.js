import React from 'react'

const Contact = () => {
  return (
    <>
    <section className="contact py-3" id='contact'>
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-md-6 pt-3">
            <div>
            <i class="fa-solid fa-square-arrow-up-right"></i><span className='fw-bold fs-5 ms-2'>Contact Us</span>
            </div>
            <h2 className='fs-1 fw-bolder display-1 mt-4'>Let's Get in Touch!</h2>

          </div>
          <div className="col-md-4 pt-3">

            <div className="form-group">
              <input type="text" className="form-control border border-dark py-3 button-r" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" />
            </div>

            <div className="form-group my-4">
              <input type="password" className="form-control border border-dark py-3 button-r" id="exampleInputPassword1" placeholder="Email Address" />
            </div>

            <div className="form-group">
              <textarea className="form-control border border-dark button-r" id="exampleFormControlTextarea1" rows="6" placeholder='Message'></textarea>
            </div>

            <div className="btn btn-outline-info text-dark py-3 px-5 my-4 rounded border border-dark button-r">
         <span>Send</span>
        </div>

          </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Contact