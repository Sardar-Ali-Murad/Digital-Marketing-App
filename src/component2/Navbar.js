import React from 'react'
import Logo from "./logo.png"
import "./index.css"
import Pic from "./pic.webp"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose}  from "react-icons/ai"

const Navbar = () => {
    let [ham,setHam]=React.useState(true)
  return (
    <div>

    <div className='nav-main'>
        <div className='nav-image'>
          <img style={{width:"70px"}} src={Logo}/>
        </div>
         <nav className="small-screen-nav">
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Service</a></li>
                <li><a>Work</a></li>
                <li><a>Contact</a></li>
            </ul>
         </nav>
    </div>
{/* 
    <img className='nav-pic' src={Pic}/>
    <div className='bubble-blue'></div> */}

    <GiHamburgerMenu className='nav-ham' onClick={()=>setHam(false)}/>

    <div className={`smal-screen-navbar ${!ham?"small-screen-nav-act":""}`}>
      <AiOutlineClose onClick={()=>setHam(true)} className='small-screen-close'/>
     <nav>
           <ul>
               <li><a className='links' onClick={()=>setHam(true)}>Pricing</a></li>
               <li><a className='links' onClick={()=>setHam(true)}>Product</a></li>
               <li><a className='links' onClick={()=>setHam(true)}>About Us</a></li>
               <li><a className='links' onClick={()=>setHam(true)}>Contact</a></li>
               <li><a className='links' onClick={()=>setHam(true)}>Community</a></li>
           </ul>
        </nav>

     </div>
    </div>
  )
}

export default Navbar
