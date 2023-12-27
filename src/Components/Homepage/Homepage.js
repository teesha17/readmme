import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'
import Event from '../Events/Event.js'
import Timeline from '../Timeline/Timeline.js'
import Gallery from '../Gallery/Gallery.js'
import Timer from './Timer/timer.js'
const Homepage = () => {
  return (
    <div className='home'>
    <div>
      
    </div>
      <Timer/>
      <Event />
      <Timeline />
      <div className='gallery-carousel'>
     <Gallery/>
      <Link to='/gallery'>
      <button className='gallery-btn'>MORE</button>
      </Link>
      </div>
    </div>
  )
}

export default Homepage
