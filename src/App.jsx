import React from 'react'
import './App.css'
import { AboutUs, Chef, Findus, Footer, Gallery,Header, Intro, Laurels, SpecialMenu} from './containers'
import { Navbar } from './components'

function App() {
 
  return (

    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Findus />
      <Footer />
    </div>
       
  
  )
}

export default App
