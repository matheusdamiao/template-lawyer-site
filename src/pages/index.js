import React, { useState, useEffect } from "react"
import MenuDesktop from "../components/MenuDesktop"
import MenuMobile from "../components/MenuMobile"
import HeroSection from "../components/HeroSection"

import Media from "react-media"
import AboutSection from "../components/AboutSection"
import { ServicesSection } from "../components/ServicesSection"
import { NumbersSection } from "../components/NumbersSection"
import { DepoimentosSection } from "../components/DepoimentosSection"
import { TeamSection } from "../components/TeamSection"
import { BlogSection } from "../components/BlogSection"
import { FormSection } from "../components/FormSection"
import { FooterSection } from "../components/FooterSection"

const Home = ({location}) => {
  return (
    <>
      <Media query="(max-width: 900px)" render={() => <MenuMobile />} />

      <Media query="(min-width: 900px)" render={() => <MenuDesktop location={location}/>} />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <NumbersSection />
      <DepoimentosSection />
      <TeamSection />
      <BlogSection />
      <FormSection />
      <FooterSection/>
    </>
  )
}

export default Home
