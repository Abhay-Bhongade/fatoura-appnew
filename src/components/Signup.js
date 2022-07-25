import React, { useState, useEffect } from "react";
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { signupTODO } from '../Redux/Action/Actionadd';

const Signup = ({}) => {

    
  const {register,handleSubmit,formState:{errors}} = useForm();
  const [isSubmit, setIsSubmit] = useState(false);

 

  const dispatch = useDispatch();

  const onSubmit = (data) =>{
    console.log(data);
    setIsSubmit(true);
    dispatch(signupTODO(data))
}


  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(errors).length === 0  && isSubmit) {
      navigate('/profilepage')
    }
  }, [errors]);

  return (
    <>
      <div className="container-fluid  ps-5">
        <div className="row">
          <div className="col-md-4">
            <div className="my-4">
              <a href="#">
               
                <img
                  src="./assests/fatoura-logo.png"
                  className="signup-h"
                  alt="logo"
                />
              </a>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                
              <h4>Sign Up</h4>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control button-r border border-dark"
                    placeholder="Enter First name"

                    {...register("firstName",{ required : true })} />
                    {errors.firstName?.type==="required" && <p className='text-danger'> "First Name is required" </p>}
                </div>

                <div className="col">
                  <input
                    type="text"
                    className="form-control button-r border border-dark"
                    placeholder="Enter Last name"
                    {...register("lastName",{ required : true })} />
                    {errors.lastName?.type==="required" && <p className='text-danger'> "Last Name is required" </p>}
                </div>
              </div>
             
              <div className="col-md-12 mt-3">
                <input
                  type="email"
                  className="form-control border border-dark button-r"
                  name="email"
                  placeholder="Enter Email Address"
                  {...register("email",{ required : true })} />
                    {errors.email?.type==="required" && <p className='text-danger'> "Email is required" </p>}
               
                <input
                  type="tel"
                  className="form-control border border-dark button-r my-3"
                  name="mobileno"
                  placeholder="Enter Mobile Number"
                  {...register("mobile",{ required : true })} />
                    {errors.mobile?.type==="required" && <p className='text-danger'> "Phone Number is required" </p>}
                
                <input
                  type="text"
                  className="form-control border border-dark button-r"
                  name="password"
                  placeholder="Enter Password"
                  {...register("password",{ required : true })} />
                  {errors.password?.type==="required" && <p className='text-danger'> "Password is required" </p>}
               
                <input
                  type="text"
                  className="form-control border border-dark button-r my-3"
                  name="referel"
                  placeholder="Referel code (Optional)"
                 
                />

             <button
                  type="submit"
                  className="btn btn-primary w-100 button-r second-b">
                  Create Account
                </button> 

                <h6 className="my-3">or</h6>
                <div className="btn btn-outline-dark text-dark py-2 px-4 rounded first-b button-r2">
                  <img
                    src="./assests/google.svg"
                    className="google-pic"
                    alt=""
                  />
                  <span className="fw-bold">Sign in with google</span>
                </div>

                <p className="fw-bold my-3">Let me in? Sign up</p>
                <p>
                  Languages : <a href="">English</a> <a href="">Arabic</a>
                </p>
              </div>
            </form>
          </div>

          <div className="col-md-6 offset-md-2 signup-two"></div>
        </div>
      </div>
    </>
  );
};

export default Signup;
