import React, { useState, useEffect } from "react"
import MenuDesktop from "../components/MenuDesktop"
import MenuMobile from "../components/MenuMobile"
import HeroSection from "../components/HeroSection"

import Media from "react-media"
import AboutSection from "../components/AboutSection"
import { ServicesSection } from "../components/ServicesSection"
import { NumbersSection } from "../components/NumbersSection"

const Home = () => {
  return (
    <>
      <Media query="(max-width: 900px)" render={() => <MenuMobile />} />

      <Media query="(min-width: 900px)" render={() => <MenuDesktop />} />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <NumbersSection />
    </>
  )
}

export default Home
