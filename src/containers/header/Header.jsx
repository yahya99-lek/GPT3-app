import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className="gbt3__header section__padding" id='home'>
      <div className="gbt3__header-content">
        <h1 className="gradient__text">Let's Build Something amazing with GPT3 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis iusto pariatur necessitatibus hic dolorem unde ut ea et nemo earum neque architecto eaque, voluptate nihil ab deserunt ipsa! Fugiat, magnam?</p>
        <div className="gbt3__header-content__input">
          <input type="email" placeholder='Your Email address'/>
          <button type="button">Get Started</button>
        </div>
        <div className="gbt3__header-content__people">
          <img src={people} alt="people" />
          <p>1.600 people requested our service</p>
        </div>
        
      </div>
      <div className="gbt3__header-image">
          <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header