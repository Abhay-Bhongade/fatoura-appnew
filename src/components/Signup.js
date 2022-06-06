import React from 'react'

const Signup = () => {
    return (
        <>
            <div className="container my-5">
                <div><a href=""> <img src="./assests/fatoura-logo.png" className='signup-h' alt="" /> </a></div>
                <div className="row">
                    <div className="col-md-4 ">
                        <h3>Sign Up</h3>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control button-r border border-dark" placeholder="First name" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control button-r border border-dark" placeholder="Last name" aria-label="Last name" />
                            </div>
                        </div>

                        <div className="col-md-12 mt-3">
                            <input type="text" className="form-control border border-dark button-r" id="validationCustom02" placeholder='Enter Email Address' />
                            <input type="text" className="form-control border border-dark button-r my-3" id="validationCustom02" placeholder='Enter Mobile Number' />
                            <input type="text" className="form-control border border-dark button-r" id="validationCustom02" placeholder='Enter Password' />
                            <input type="text" className="form-control border border-dark button-r my-3" id="validationCustom02" placeholder='Referel code (Optional)' />
                            <button type="button" className="btn btn-primary w-100 button-r">Create Account</button>
                            <h6 className='my-3'>or</h6>
                            <div className='btn btn-outline-dark text-dark py-2 px-4 rounded button-r2'>
                                <img src="./assests/google.svg" className='google-pic' alt="" /> <span className='fw-bold'>Sign in with google</span>
                            </div>
                            <p className='fw-bold my-3'>Let me in? Sign up</p>
                            <p>Languages : <a href="">English</a> <a href="">Arabic</a></p>
                        </div>



                    </div>

                    <div className="col-md-6 offset-md-2 signup-two">
                        <div className="signup-two">
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup