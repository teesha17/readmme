import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'
import Event from '../Events/Event.js'
import Timeline from '../Timeline/Timeline.js'

const Homepage = () => {
  return (
    <div>
      <div>YHA KOI BADHIYA SA BACKGROUND KE SATH WELCOME MESSAGE HOGA</div>
      <Event />
      <Timeline />
      <div>YHA KUCH IMAGES LAGA DENGE 3 SE 4 FROM TEAM MEMBERS</div>
      <Link to='/team'>
      <button>MORE</button>
      </Link>
      <div>YHA MORE BUTTON MAIN TEAM MEMBERS PAGE PE LE JAYGA</div>
      <div>YHA FHIRSE KUCH IMAGES LAGA DENGE 3 SE 4 FOR GALLERY</div>
      <Link to='/gallery'>
      <button>MORE</button>
      </Link>
      <div>OR AGAR LAST MAI SPONSERS KE LIYE BOLENGE TO VO BHI KAR DENGE</div>
    </div>
  )
}

export default Homepage
