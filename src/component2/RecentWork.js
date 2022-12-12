import React from 'react'
import P1 from "./img/p1.jpg"
import P2 from "./img/p2.jpg"
import P3 from "./img/p3.webp"
import P4 from "./img/p4.webp"
import P5 from "./img/p5.jpg"
import P6 from "./img/p6.jpg"
import P7 from "./img/p7.webp"
import P8 from "./img/p8.jpg"
import P9 from "./img/p9.jpg"

const RecentWork = () => {
  return (
    <div className='div-center-80 recent-main main-div-margins'>
      <a>digital experience</a>
      <h2 style={{marginTop:"20px"}}>Some recent work <br/> we are really proud of</h2>

      <div className='mansory-layout'>
         <div className='single-masory-card m1'>
            <img src={P1}/>
            <h5>Recent News</h5>
            <p style={{margin:"0px"}}>Branding</p>
         </div>
         <div className='single-masory-card m2'>
            <img src={P2}/>
            <h5>Recent News</h5>
            <p>Branding</p>
         </div>
         <div className='single-masory-card m3'>
            <img src={P3}/>
            <h5>Recent News</h5>
            <p>Branding</p>
         </div>
         <div className='single-masory-card m4'>
            <img src={P4}/>
            <h5>Recent News</h5>
            <p>Branding</p>
         </div>
         <div className='single-masory-card m5'>
            <img src={P5}/>
            <h5>Recent News</h5>
            <p>Branding</p>
         </div>
         <div className='single-masory-card m6'>
            <img src={P6}/>
            <h5>Recent News</h5>
            <p>Branding</p>
         </div>
         <div className='single-masory-card m7'>
            <img src={P7}/>
            <h5>Recent News</h5>
            <p>Branding</p>
         </div>
         <div className='single-masory-card m8'>
            <img src={P8}/>
            <h5>Recent News</h5>
            <p>Branding</p>
         </div>
         <div className='single-masory-card m9'>
            <img src={P9}/>
            <h5>Recent News</h5>
            <p>Branding</p>
         </div>
      </div>

        
    </div>
  )
}

export default RecentWork
