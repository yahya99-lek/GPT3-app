import React from 'react'
import './footer.css'
import logofooter from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before the others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logofooter} alt="logo" />
          <p>yahya lekhlidi,All rights reserved.</p>
        </div>
        
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>socialMedia</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Privacy policy</p>
          <p>Terms & conditions</p>
          <p>Contact</p>
          
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Linkedin</p>
          <p>Whatsapp</p>
          <p>Facebook</p>
        </div>

        <div className="gpt3__footer-copyright">
          <p> 2023 GPT-3 All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer