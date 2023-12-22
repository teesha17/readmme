import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage.js'
import About from './Components/About/About.js'
import Contact from './Components/Contact/Contact.js'
import Gallery from './Components/Gallery/Gallery.js'
import Errorpage from './Components/Errorpage/Errorpage.js'
import Team from './Components/Team/Team.js'


const Rout = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Homepage /> } />
        <Route path='/team' element={ <Team /> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/contact' element={ <Contact/> } />
        <Route path='/gallery' element={ <Gallery/> } />
        <Route path='*' element={ <Errorpage /> } />
      </Routes>
    </>
  )
}

export default Rout;