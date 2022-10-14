import React, { useState, useEffect } from 'react'
import MenuDesktop from '../components/MenuDesktop'
import MenuMobile from '../components/MenuMobile'
import HeroSection from '../components/HeroSection'



const Home = () => {
  
  const [isMobile, setMobile] = useState(false)

  useEffect(()=>{
      const checkSize = ()=>{
          const resize = window.innerWidth < 900
          setMobile(resize)
      }
     
      window.addEventListener('resize', ()=> checkSize())
      
      return window.removeEventListener('resize', ()=> checkSize())

  },[])


  return (
    <>
       {isMobile ? <MenuMobile/> : <MenuDesktop/>}
       <HeroSection />
    </>
  )
}

export default Home
