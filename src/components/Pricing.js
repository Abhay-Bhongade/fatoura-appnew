import React, { useState } from 'react'
import TableData from './TableData';
import Table from 'react-bootstrap/Table'

const Pricing = () => {
  const [data, setData] = useState(TableData);
  return (
    <>
      <section id='pricing'>
        <div className="container my-md-5 my-sm-3">
          <div className="row py-5">
            <div className="col-md-12">
              <div>
                <img src="./assests/Arrow.svg" width="18" alt="arrow" /><span className='fw-bolder fs-5 ms-2 gilroy'>pricing</span>
              </div>
              <h2 className='py-3 fw-bolder fs-1'>Choose the plan which suits you</h2>

              <div className="t-div border button-r ">
                <Table border className='table mt-3 mb-3 border-0 t-div' responsive="md">
                  <thead>
                    <tr>
                      <th className='ps-5 py-3'>Plan Features</th>
                      <th className=' py-3'>Free $0/year</th>
                      <th className=' py-3'>Basic $90/year</th>
                      <th className=' py-3'>Pro $140/year</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      data.map((ele) => {
                        return (
                          <>
                            <tr key={ele.id}>
                              <td className='fw-bold px-5 py-3'>{ele.one}</td>
                              <td className='fw-bold px-5 py-3'>{ele.two}</td>
                              <td className='fw-bold px-5 py-3'>{ele.three}</td>
                              <td className='fw-bold px-5 py-3'>{ele.four}</td>
                            </tr>

                          </>
                        )
                      })
                    }
                    <tr>
                      <td></td>
                      <td> <div className="btn btn-outline-info text-dark py-md-3 py-1 px-md-4 rounded button-r buttonone onetwo first-b">
                        <span className='fw-bold spanone inb'>Start Now</span> <i className="fa-solid fa-arrow-right-long inb"></i>
                      </div> </td>

                      <td><div className="btn btn-outline-info second-b text-white rounded button-r py-md-3 py-sm-2 px-4 inb">
                        <span className='fw-bold spanone'>Get this</span> <i className="fa-solid fa-arrow-right-long inb"></i>
                      </div> </td>

                      <td><div className="btn btn-outline-info second-b text-white py-md-3 py-sm-2 px-4 rounded button-r inb">
                        <span className='fw-bold spanone'>Get this</span> <i className="fa-solid fa-arrow-right-long inb"></i>
                      </div> </td>
                    </tr>
                     
                  </tbody>
                </Table>



              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing