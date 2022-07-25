import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Table from 'react-bootstrap/Table'
import "./Profile.css"
import {useSelector} from 'react-redux'
import VerticalHeader from './VerticalHeader'



const MyDocument = () => {

    const myState = useSelector((state)=>state.todoReducers.list) 
    console.log(myState);

    const myData1 = useSelector((state) => state.addReducer.list)
    console.log(myData1);


    const [total,setTotal] = useState();

    const totalPrice = ()=>{
        let total = 0;
        myData1.map((ele)=>{
            total = ele.quantity * ele.unitPrice + total
        });
        setTotal(total);
    };


    useEffect(()=>{
        totalPrice();
    },[totalPrice])

    console.log(total);

    return (
        <>
                
           <VerticalHeader/>

            <div className="page-content" id="content">
                <Navbar />

                <section className='sectionbg my-3 mx-4 button-r2 sectiondocument'>
                <div className="container">
                    
                    <div className="row">
                        <div className="col-md-12 mb-3">

                        <button className="btn btn-outline-info bg-white text-dark py-md-1 px-md-3 rounded button-r buttonone onetwo first-b"> <i className="fa-solid fa-arrow-left-long inb"></i>
                        <span className='fw-bold spanone inb'> Back</span> 
                      </button> 

                      <button className="btn btn-outline-info second-b text-white rounded button-r py-md-1 px-md-3 inb mx-2">
                        <span className=' spanone'> <i className="fa-solid fa-pen-to-square"></i> Edit</span> 
                      </button>

                    <button className="btn btn-outline-info second-b text-white rounded button-r py-md-1 px-md-3 inb">
                        <span className=' spanone'> <i className="fa-solid fa-copy"></i> Copy</span> 
                      </button> 

                      <button className="btn btn-outline-info second-b text-white rounded button-r py-md-1 px-md-3 inb mx-2">
                        <span className=' spanone'> <i className="fa-solid fa-pen-to-square"></i> Download</span> 
                      </button>

                      <button className="btn btn-outline-info second-b text-white rounded button-r py-md-1 px-md-3 inb">
                        <span className=' spanone'> <i className="fa-solid fa-trash"></i> Delete</span> 
                      </button>

                      <button className="btn btn-outline-info second-b text-white rounded button-r py-md-1 px-md-3 inb mx-2">
                        <span className=' spanone'> <i className="fa-solid fa-envelope"></i> Send by Email</span> 
                      </button>

                      <button className="btn btn-outline-info second-b text-white rounded button-r py-md-1 px-md-3 inb">
                        <span className=' spanone'>
                        <i className="fa-solid fa-money-check"></i> Payments</span> 
                      </button>

                      

                     

                        </div>

                    </div>
                </div>
                
               




                    <div className="container bg-white p-4 button-r2">
                        
                            <h4 className='text-center fw-bold'>INVOICE</h4>
                            {
                                myState.map((ele)=>{
                                    return(
                                        <>

                                       <div className="row">
                                       <div className="col-md-8">
                                <div><span className='fw-bold'>Invoice Number: </span>{ele.invoiceNum}</div>
                                <div><span className='fw-bold'>Invoice Date:  </span>{ele.invoiceDate}</div>
                                <div><span className='fw-bold'>Reference Number:  </span>{ele.referenceNum}</div>
                                <div><span className='fw-bold'>Due Date:  </span>{ele.dueDate}</div>
                                <div><span className='fw-bold'>Client Name </span></div>
                                <hr />
                            </div>
                            <div className="col-md-4">
                                <div className='mx-auto'>
                                    <img src="./assests/fatoura-logo.png" className='img-fluid' alt="logomain" width={200}
                                        height={112} />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className='fw-bold'> {ele.customerName} </div>
                                <div className='fw-bold'>  Billing Address: </div>
                                <div> {ele.billingAddress} </div>
                                <div className='fw-bold'> Shipping Address: </div>
                                <div>  {ele.shippingAddress} </div>
                                <hr />
                            </div>
                            <div className="col-md-4">
                            <div className='fw-bold'>{ele.companyName} </div>
                               
                               {ele.companyAddress}
                                <div className='fw-bold'>Fatoura: </div>
                                <div><span className='fw-bold'>Entity ID: </span>{ele.entityID}</div>
                                <div><span className='fw-bold'>Tax Number: </span> {ele.taxNumber}</div>
                                 
                                
                            </div>
                            <div className="col-md-12">
                                <div className='fw-bold'>Description</div>
                                <p>{ele.description}</p>

                                <div className='ulb buttonone pb-1'>
                                    <Table>
                                        <thead>
                                            <tr className='ulbg px-3  mb-3 fw-bold text-white py-3 buttonone'>
                                                <td>Item Name</td>
                                                <td>SKU</td>
                                                <td>Quantity</td>
                                                <td>Unit Price</td>
                                                <td>Total Amount</td>
                                                <td>Tax</td>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                              myData1?.length?<> 
                                                {
                                                    myData1?.map((ele)=>{
                                                      return (
                                                        <>
                                                        { Object.keys(ele)?.length !== 0 ?
                                                         <tr>
                                                          <td>{ele.itemName}</td>
                                                          <td>{ele.sku}</td>
                                                          <td>{ele.quantity}</td>
                                                          <td>{ele.unitPrice}</td>
                                                          <td>${ele.quantity * ele.unitPrice }</td>
                                                          <td>No Tax</td>
                                                        </tr>  : undefined }
                                                      </>
                                                      )
                                                    })  
                                                  }
                                                  </> : <>No items Added</>
                                            }
                                            
                                                
                                            
                                            
                                            
                                        </tbody>
                                    </Table>
                                </div>
                                <hr />

                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <span className='fw-bold'>Currency :</span> MAD
                                    </div>
                                    <div className='mb-2'>
                                        <div className='d-flex justify-content-around fw-bold'>
                                            <span className='me-5'>Subtotal:</span>
                                            <span className='ms-5'>${total}</span>
                                        </div>
                                        <hr />
                                        <div className='d-flex justify-content-between fw-bold'>
                                            <span>Total:</span>
                                            <span>${total}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-md-6">
                                    <div className='fw-bold'>Terms and Conditions</div>
                                    <div>{ele.termAndConditions}</div>
                                    <div className='fw-bold'>Digitally signed document</div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className='d-flex justify-content-between' >
                                    <div className="imageContainer border border-info text-center">
                                        <span className='fw-bold'>E-invoice</span>
                                        <img src="./assests/download.png" alt="qrcode" className='img-fluid ' width={150} height={150} />
                                    </div>

                                    <div className="imageContainer border border-info text-center">
                                        <span className='fw-bold'>QR code Heading</span>
                                        <img src="./assests/logolast.png" alt="logo" className='img-fluid' width={150} height={150} />
                                    </div>

                                </div>
                            </div>
                        </div>


                                        </>
                                    )
                                })
                            }
                           

                    </div>
                </section>
            </div>


        </>
    )
}

export default MyDocument