import styled, {keyframes} from 'styled-components'
import React, { useState } from 'react'
import heroBg from '../images/hero-background.svg'
import arrow from '../images/arrow-down.svg'
import zap from '../images/zap-logo.svg'

const StyledHeroSection = styled.div`
    width: 100%;
    height: calc(110vh - 200px);
    background-image: url(${heroBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #00041C;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding-top: 200px;

    @media screen and (max-width: 760px){
        padding-top: 100px;

    }
    
`

const Title = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 61px;
    line-height: 74px;
    text-align: right;
    letter-spacing: -0.5px;
    margin: 0;
    color: #FFFFFF;
    max-width: 70%;
    padding-right: 90px;

    @media screen and (max-width: 760px){
        font-size: 40px;
        line-height: 50px;
        max-width: 90%;
        padding-right: 20px;
    }
`

const Linha = styled.span`
    
    border: 3px solid #634636;
    width: 300px;
    margin-right: 90px;

    
    @media screen and (max-width: 760px){
        font-size: 12px;
        margin-right: 20px;
        border: 2px solid #634636;
    }

`

const SubTitle = styled.h3`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 200;
    font-size: 30px;
    line-height: 37px;
    text-align: right;
    letter-spacing: -0.218294px;
    color: #FFFFFF;
    padding-right: 90px;


    @media screen and (max-width: 760px){
        font-size: 20px;
        padding-right: 20px;

    }

`
const Btn = styled.button`
    max-width: 300px;
    width: 100%;
    padding: 23px 35px;
    background: #634636;
    border-radius: 9px;
    margin-right: 90px;
    border: none;
    color: #FFFF;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    cursor: pointer;

    @media screen and (max-width: 760px){
        margin-right: 20px;
        padding: 9px 10px;
        max-width: 250px;
        font-size: 12px;
        height: 50px;
    }

`

const slide = keyframes`
    0% {
        transform: translate(0px, 0px)

    }

    50% {
        transform: translate(0px, 15px)

    }

    100% {
        transform: translate(0px, 0px)

    }
`

const ArrowDown = styled.a`
    position: absolute;
    width: 60px;
    height: 60px;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    left: 48%;
    top: 90%;
    animation: ${slide} 2s ease-in-out infinite;
    
    :hover{
        cursor: pointer;
            
    }

    @media screen and (max-width: 760px){
        top: 95%;
        
    }

    @media screen and (max-width: 400px){
        top: 98%;
        left: 45%;
    }
`

const Zap = styled.a`
    background-image: url(${zap});
    background-repeat: no-repeat;
    position: fixed;
    top: 88%;
    right: 5%;
    width: 90px;
    height: 100px;
    transition: 1s;

    :hover{
        cursor: pointer;
        transform: scale(1.1);
    }
`

const HeroSection = () => {
  return (
    <StyledHeroSection>
        <Title>Soluções jurídicas com respeito e profissionalismo</Title>
        <Linha/>
        <SubTitle>Ajudamos você a solucionar problemas</SubTitle>
        <Btn>AGENDE UMA REUNIÃO</Btn>
        <ArrowDown href='#'/>
        <Zap />
    </StyledHeroSection>
  )
}

export default HeroSection


