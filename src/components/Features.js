import React,{useState} from 'react'
import FeaturesData from "./FeaturesData";

const Features = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length;



  const nextSlide = ()=>{
    setCurrent(current === length-1 ? 0 : current + 1);
    console.log(current);
  }

  const prevSlide = ()=>{
    setCurrent(current === 0 ? length-1 : current -1 );
    console.log(current);
}
  if(!Array.isArray(slides) || slides.length <= 0){
    return null;
  }
  return (
    <>
      <div className="container my-5 slide-content">
        <div className="row my-5">
          <div className='arr-s arr-left' onClick={prevSlide}><span className='fw-bold'>&#10094;</span></div>
          <div className='arr-s arr-right' onClick={nextSlide}><span className='fw-bold'>&#10095;</span></div>
        
        
        <div>
            <i className="fa-solid fa-square-arrow-up-right"></i><span className='fw-bolder fs-5 ms-2'>features</span>
        </div>


        <div>
        
        
          {
            FeaturesData.map((ele,index)=>{
             
              return (
                <div className={index=== current ? 'slide active' : current } key={index}> 
                {
                  index=== current && (
                    <>
                    <div className="container">
                      <div className="row">
                      <div className="col-md-12">
                      <h1 className='text-center fw-bolder secure-h mb-4'>{ele.title}</h1>
                    </div>
                    <div className="col-md-6">
                    <img src={ele.image} className='w-100 img-fluid' alt="Slider" />
                    </div>
                    <div className="col-md-6 pt-5">
                    <h4 className='fw-bold pt-5' style={{lineHeight:1.3}}>{ele.description}</h4>
                    </div>
                    </div>
                    </div>
                    </>

                  )
                }
                    
                </div>
              )

            })
          }

        </div>
        
        </div>
        </div>
    </>
  )
}

export default Features