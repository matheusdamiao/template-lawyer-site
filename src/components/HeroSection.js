import styled, { keyframes } from "styled-components"
import React, { useState } from "react"
import heroBg from "../images/hero-background.svg"
import newhero from "../images/newherobg.svg"
import zap from "../images/zap-logo.svg"

const StyledHeroSection = styled.div`
  width: 100%;
  height: calc(100vh - 350px);
  background-image: url(${newhero});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 200px;

  @media screen and (max-width: 760px) {
    padding-top: 50px;
    background-position: 70%;
    height: calc(100vh - 150px);
  }
`

const Title = styled.h1`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 45px;
  line-height: auto;
  text-align: left;
  letter-spacing: -0.5px;
  margin: 0;
  color: #00041c;
  max-width: 70%;
  padding-left: 90px;

  @media screen and (max-width: 760px) {
    font-size: 40px;
    line-height: 50px;
    max-width: 90%;
    padding-left: 30px;
  }
`

const Linha = styled.span`
  border: 2px solid #3d2b21;
  width: 300px;
  margin-top: 20px;
  margin-left: 95px;

  @media screen and (max-width: 760px) {
    font-size: 12px;
    background-color: #2f3245;
    margin-left: 35px;
  }
`

const SubTitle = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 200;
  font-size: 25px;
  line-height: 37px;
  text-align: right;
  letter-spacing: -0.218294px;
  color: #00041c;
  padding-left: 90px;
  margin-top: 20px;

  @media screen and (max-width: 760px) {
    font-size: 20px;
    padding-left: 30px;
  }
`
const Btn = styled.button`
  max-width: 300px;
  width: 100%;
  padding: 23px 35px;
  background: #3a3e54;
  border-radius: 9px;
  margin-left: 90px;
  border: none;
  color: #ffff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (max-width: 760px) {
    margin-left: 30px;
    padding: 9px 10px;
    max-width: 250px;
    font-size: 12px;
    height: 50px;
  }
`

const Zap = styled.img`
  position: fixed;
  top: 85%;
  right: 0.5%;
  height: 100px;
  width: 80px;
  transition: 0.5s;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media screen and (max-width: 760px) {
    width: 50px;
    top: 86%;
    right: 5%;
  }
`

const HeroSection = () => {
  return (
    <StyledHeroSection id="hero">
      <Title>Soluções jurídicas com respeito e profissionalismo</Title>
      <Linha />
      <SubTitle>Ajudamos você a solucionar problemas</SubTitle>
      <Btn>AGENDE UMA REUNIÃO</Btn>

      {/* <Zap src={zap}/> */}
    </StyledHeroSection>
  )
}

export { Btn }
export default HeroSection
