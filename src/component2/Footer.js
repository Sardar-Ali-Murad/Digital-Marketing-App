import React from 'react'

const Footer = () => {
  return (
    <div className='div-center-80 grid-14 main-div-margins'>
      <div>
         <p>Abbasia Town 123 block X Town C Palm Lane Sector D12</p>
         <p>Punjab Bahawalpur</p>
         <p>03186881689</p>
         <p style={{color:"red"}}>sardaralimuradali4@gmail.com</p>
      </div>

      <div>
        <h3>About</h3>
        <p>About us</p>
        <p>Blog</p>
        <p>Portfolio</p>
        <p>Carriers</p>
        <p>Patners</p>
      </div>

      <div>
        <h3>Services</h3>
        <p>eCommerence</p>
        <p>Branding</p>
        <p>Stategy</p>
        <p>Design</p>
        <p>Digital Marketing</p>
      </div>

      <div >
        <h3>NewsLetter</h3>
        <p>Subscribe our newsletter to get the latest updates</p>
        <div  style={{position:'relative'}}>
          <input className='light footer-input'  placeholder='ali@gmail.com'/>
          <p className='dark go'>GO</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
