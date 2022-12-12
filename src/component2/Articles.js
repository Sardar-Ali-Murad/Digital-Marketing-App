import React from 'react'
import A1 from "./img/a1.png"
import A2 from "./img/a2.jpg"
import A3 from "./img/a3.webp"

const Articles = () => {
  return (
    <div className='div-center-80 main-div-margins'>
      <p className='text-center' style={{color:"red"}}>Our Recnt Articles</p>
      <h3 className='text-center'>Articles Daily Updated</h3>

    <div className='grid-even-3 article-grid'>
      <div style={{marginBottom:"30px"}}>
         <img src={A1}/>
         <p>Category 10 hours ago</p>
         <h3>Free Advertizing of your online business</h3>
      </div>
      <div  style={{marginBottom:"30px"}}>
         <img src={A2}/>
         <p>Category 10 hours ago</p>
         <h3>Free Advertizing of your online business</h3>
      </div>
      <div  style={{marginBottom:"30px"}}>
         <img src={A1}/>
         <p>Category 10 hours ago</p>
         <h3>Free Advertizing of your online business</h3>
      </div>
    </div>



    </div>
  )
}

export default Articles
