import React from 'react'
import {GiStoneWall} from "react-icons/gi"
import {HiSpeakerWave}  from "react-icons/hi2"
import {IoPulseOutline}  from "react-icons/io5"

const Agency = () => {
  return (
    <div className='div-center-80' style={{marginTop:"100px",marginBottom:"200px"}}>
      <p className='text-center'>Join Our Agency</p>
      <h2 className='text-center'>We design and build beautiful digital products that makes a difference</h2>
      <div className='grid-even-3 agency-grid' style={{marginTop:"60px"}}>
        <div className='text-center'>
            <GiStoneWall style={{fontSize:"36px",color:"red"}} />
            <h4>Grow Your Business</h4>
            <p> It was going to be a long hour as he nervously eyed everyone around the table hoping they would keep their mouths shut.</p>
        </div>
        <div className='text-center'>
            <HiSpeakerWave  style={{fontSize:"36px",color:"red"}} />
            <h4>Grow Your Business</h4>
            <p> It was going to be a long hour as he nervously eyed everyone around the table hoping they would keep their mouths shut.</p>
        </div>
        <div className='text-center'>
            <IoPulseOutline  style={{fontSize:"36px",color:"red"}}/>
            <h4>Grow Your Business</h4>
            <p> It was going to be a long hour as he nervously eyed everyone around the table hoping they would keep their mouths shut.</p>
        </div>
      </div>
    </div>
  )
}

export default Agency
