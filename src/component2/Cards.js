import React from 'react'
import {CiMobile2}  from "react-icons/ci"
import {GiDeadWood}  from "react-icons/gi"
import {AiOutlineComment}  from "react-icons/ai"
import { motion } from 'framer-motion';
import {slideIn, navVariants,fadeIn} from "../utils/frameMotion"


const Cards = () => {
  return (
    <div className='card-main div-center-70 grid-even-3 main-div-margins' style={{overflowX:"hidden"}}>
      <div className='card-1'>
        <CiMobile2 style={{fontSize:"40px",color:"red"}}/>
        <h3>Mobile App</h3>
        <p style={{color:"white"}}>"It doesn't take much to touch someone's heart," Daisy said with a smile on her face. "It's often just the little things you do that can change a person's day for the better."</p>
      </div>
      <motion.div  initial="hidden" whileInView="show"   variants={fadeIn('down', 'tween', .3, 1)}   className='card-2'>
        <GiDeadWood style={{fontSize:"40px",color:"red"}}/>
        <h3>Mobile App</h3>
        <p style={{color:"white"}}>"It doesn't take much to touch someone's heart," Daisy said with a smile on her face. "It's often just the little things you do that can change a person's day for the better."</p>
      </motion.div>
      <div className='card-3'>
        <AiOutlineComment style={{fontSize:"40px",color:"red"}}/>
        <h3>Mobile App</h3>
        <p style={{color:"white"}}>"It doesn't take much to touch someone's heart," Daisy said with a smile on her face. "It's often just the little things you do that can change a person's day for the better."</p>
      </div>
    </div>
  )
}

export default Cards
