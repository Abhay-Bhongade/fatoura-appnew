import React, { useState,useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch } from 'react-redux/es/exports'
import { loadUser } from '../Redux/Action/Actionadd'






const Register = () => {


    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser())
    }, [])
    





    return (
        <>
            <div className="container py-5">
                <div className="row py-2">
                    <div className="col-md-6 py-5">
                        <h2>Add User</h2>

                        <form action="" className='d-flex flex-column'>
                            <input type="text" id="exampleInputEmail1" aria-describedby="emailHelp" className='my-2 form-control' placeholder="Enter UserName" value={userName} onChange={(e) => setUserName(e.target.value)} />

                            <input type="email" className='my-2 form-control' placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />



                            <input type="password" className='my-2 form-control' placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                            <input type="password" className='my-2 form-control' placeholder="Confirm Password" value={confirmPassword} onChange={(e) => confirmPassword(e.target.value)} />

                            <button type="submit" className='btn btn-primary'>Sign in</button>

                        </form>
                    </div>
                    <div className="col-md-6 py-5 mt-5">
                        <Table className="table py-5 border " striped>
                            <thead className='py-5'>
                                <tr>
                                
                                    <th scope="col">First</th>
                                    <th scope="col">Email</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                   <td>Abhay</td>
                                   <td>abhay@gmail.com</td>
                                   
                                </tr>
                               
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;
