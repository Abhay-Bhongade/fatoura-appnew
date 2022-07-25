import React from 'react'
import { Navbar } from 'react-bootstrap'
import VerticalHeader from './VerticalHeader'
import Table from "react-bootstrap/Table";


const MyInvoices = () => {
    return (
        <>
            <VerticalHeader />

            <div className="page-content" id="content">


                <Navbar />

                <section className='sectionbg my-3 mx-4 button-r2 py-5 px-4'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">

                                <div className='d-flex justify-content-end'>
                                    <span className='fw-bold me-md-auto' style={{ fontSize: 18 }}>My Invoices</span>
                                    <button className="btn btn-outline-info bg-white text-dark py-md-1 px-md-3 rounded button-r buttonone onetwo first-b">
                                        <span className='fw-bold spanone inb'> All Documents</span>
                                    </button>
                                    <button className="btn btn-outline-info second-b text-white rounded button-r py-md-1 px-md-3 inb mx-2">
                                        <span className=' spanone'> <i className="fa-solid fa-copy"></i> Copy</span>
                                    </button>
                                    <button className="btn btn-outline-info second-b text-white rounded button-r py-md-1 px-md-3 inb">
                                        <span className=' spanone'> <i className="fa-solid fa-trash"></i> Delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container my-3">
                        <div className="row">
                            <div className="col-md-12">
                                <Table>
                                    <thead>

                                        <tr className="tbg px-3  mb-3 fw-bold text-dark py-3">
                                            <td id='radioWidth'>
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault1"
                                                />
                                            </td>
                                            <td>Customer Name</td>
                                            <td>Type</td>
                                            <td>Invoice #</td>
                                            <td>Date Issued </td>
                                            <td>Amount</td>
                                            <td>Tax</td>
                                            <td>Amount Paid</td>
                                            <td>Amount Due</td>
                                            <td>Total Amount</td>
                                            <td>Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td id='radioWidth'>
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault1"
                                                />
                                            </td>

                                            <td>Priyanshu</td>
                                            <td>Invoice</td>
                                            <td>INV2022-00001</td>
                                            <td>2022-06-16</td>
                                            <td>֏2,420.00</td>
                                            <td>֏0.00</td>
                                            <td>֏0.00</td>
                                            <td>֏1,887.60</td>
                                            <td>֏1,887.60</td>
                                            <td className='d-flex flex-column'>
                                                <span className="spanIcons my-2 d-flex justify-content-center align-items-center" title='Edit'>
                                                    <i className="fa-solid fa-pen-to-square iconSize"></i>
                                                </span>

                                                <span  className="spanIcons d-flex justify-content-center align-items-center" title='View'>
                                                    <i class="fa-solid fa-file  iconSize"></i>
                                                </span>
                                            </td>
                                        </tr>

                                    </tbody>
                                </Table>

                            </div>
                        </div>
                    </div>




                </section>
            </div>
        </>
    )
}

export default MyInvoices