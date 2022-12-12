import React from 'react'
import Img1 from "./img/1.jpg"
import Img2 from "./img/2.jpg"
import Img3 from "./img/3.jpg"

const Connect = () => {
  return (
    <div className='connect-main grid-even-2 div-center-80 main-div-margins' >
        <div className='connect-images'>
             <img className='pic1' src={Img1}/>
             <img className='pic2' src={Img2}/>
             <img className='pic3' src={Img3}/>
        </div>

        <div className='connect-content'>
           <a>Digital Experience</a>
           <h3  style={{marginTop:"20px"}}>Connect People In Digital Life</h3>
           <p>Frank knew there was a correct time and place to reveal his secret and this wasn't it. </p>
           <p> The issue was that the secret might be revealed despite his best attempt to keep it from coming out. At this point, it was out of his control and completely dependant on those around him who also knew the secret. They wouldn't purposely reveal it, or at least he believed that, but they could easily inadvertently expose it. </p>
           <button className='experience-btn dark'>More about us</button>
        </div>
    </div>
  )
}

export default Connect
