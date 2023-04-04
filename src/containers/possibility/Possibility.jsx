import React from 'react'
import './possibility.css' 
import possibilitytImage from '../../assets/possibility.png'
const Possibility = () => {
  return (
    <div className="gpt3__possibility section_padding" id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilitytImage} alt="possibilitytImage" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The Possibility are beyond your Imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla consectetur assumenda temporibus eos animi similique tenetur facere odio beatae voluptatibus quisquam numquam, quidem eligendi fugit minima recusandae accusantium suscipit?</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility