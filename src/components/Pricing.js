import React,{useState} from 'react'
import TableData from './TableData';
import Table from 'react-bootstrap/Table'

const Pricing = () => {
  const [data, setData] = useState(TableData);
  return (
    <>
      <div className="container" id='pricing'>
        <div className="row">
          <div className="col-md-12">
            <div>
            <i class="fa-solid fa-square-arrow-up-right"></i><span className='fw-bolder fs-5 ms-2'>pricing</span>
            </div>
            <h1 className='py-3 fw-bolder fs-1 '>Choose the plan which suits you</h1>

              <div className="t-div border button-r ">
            <Table variant="info" border className='table mt-3 mb-3 border-0'  responsive="md">
  <thead>
    <tr>
      <th className='ps-5'>Plan Features</th>
      <th>Free $0/year</th>
      <th>Basic $90/year</th>
      <th>Pro $140/year</th>
    </tr>
  </thead>
  
  <tbody>
  {
             TableData.map((ele)=>{
               return (
                 < >
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
  </tbody>
</Table>
   
<div className='d-flex justify-content-end align-items-center pb-5'>
<div className="btn btn-outline-info text-dark py-3 px-4 ms-auto rounded button-r p-sec">
         <span className='fw-bold'>Start Now</span> <i className="fa-solid fa-arrow-right-long"></i>
</div>
<div className="btn btn-outline-info second-b text-white py-3 px-4 ms-4 rounded button-r">
         <span className='fw-bold'>Get this</span> <i className="fa-solid fa-arrow-right-long"></i>
</div>
<div className="btn btn-outline-info second-b text-white py-3 px-4 ms-5 me-5 rounded button-r">
         <span className='fw-bold'>Get this</span> <i className="fa-solid fa-arrow-right-long"></i>
</div>
</div>
</div>         
      
    
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing