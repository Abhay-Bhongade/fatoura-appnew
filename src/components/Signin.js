import React from 'react'

const Signin = () => {
    return (
        <div>
            <div className="container border py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                <div className='mb-5'><a href=""> <img src="./assests/fatoura-logo.png" className='signup-h' alt="" /> </a></div>
                        <h4 className='fw-bolder mb-3'>Sign in</h4>
                        <div class="mb-3">
                            <input type="email" className="form-control button-r w-75 border border-dark py-2" id="exampleFormControlInput1" placeholder="Enter Email" />
                        </div>
                        <div class="mb-3">
                            <input type="password" className="form-control button-r w-75 border border-dark py-2" id="exampleFormControlInput2" placeholder="Enter Password"  />
                        </div>
                        <h6>Forget Your Password?</h6>
                        <button type="button" className="btn btn-primary w-75 button-r b-color border-0 mt-2 mb-3 py-2">Let me in</button>
                        <h6>Sign in with Social Media</h6>
                        <div className='btn btn-outline-dark text-dark py-2 px-4 rounded button-r2'>
                            <img src="./assests/google.svg" className='google-pic' alt="" /> <span className='fw-bold'>Sign in with google</span>
                        </div>
                        <p className='fw-bold my-3'>Let me in? Sign up</p>
                        <p>Languages : <a href="">English</a> <a href="">Arabic</a></p>
                        


                    </div>
                    <div className="col-md-6 signup-two">
                        <div className="signup-two">
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin