import React from 'react'
import { Feature } from '../../components'
import  './features.css'

const FeauturesData = [
  { 
  title: 'Improving and disturts instantly',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor similique, ut fugiat sed minus ipsam quibusdam laudantium perspiciatis cupiditate rem. Quasi illum consequatur harum, molestias qui nesciunt magni fugiat impedit?',
  },
  { 
  title: 'Become the tender active ',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor similique, ut fugiat sed minus ipsam quibusdam laudantium perspiciatis cupiditate rem. Quasi illum consequatur harum, molestias qui nesciunt magni fugiat impedit?',
  },
  { 
  title: 'Message or am nothing',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor similique, ut fugiat sed minus ipsam quibusdam laudantium perspiciatis cupiditate rem. Quasi illum consequatur harum, molestias qui nesciunt magni fugiat impedit?',
  },
  { 
  title: 'really boyu law county',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor similique, ut fugiat sed minus ipsam quibusdam laudantium perspiciatis cupiditate rem. Quasi illum consequatur harum, molestias qui nesciunt magni fugiat impedit?',
  }

]
const Features = () => {
  return (
    
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          
          The Future is Now and You Just Need To Realize It.Step Into The Future Today & Make it Happen.
        </h1>
        <p>Request Early Acces</p>
      </div>
      <div className="gpt3__features-container">
        {FeauturesData.map((item,index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features