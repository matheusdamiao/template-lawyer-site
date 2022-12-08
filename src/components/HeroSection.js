import styled, {keyframes} from 'styled-components'
import React, { useState } from 'react'
import heroBg from '../images/hero-background.svg'
import zap from '../images/zap-logo.svg'

const StyledHeroSection = styled.div`
    width: 100%;
    height: calc(120vh - 200px);
    background-image: url(${heroBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-color: #00041C;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding-top: 200px;

    @media screen and (max-width: 760px){
        padding-top: 50px;
        background-position: 50% 10%;
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
    
    border: 3px solid #B29786;
    width: 300px;
    margin-right: 100px;

    
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
    margin-top: 20px;

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


const Zap = styled.img`
    position: fixed;
    top: 85%;
    right: 0.5%;
    height: 100px;
    width: 80px;
    transition: 0.5s;

    :hover{
        cursor: pointer;
        transform: scale(1.1);
    }


    @media screen and (max-width: 760px){
        width: 50px;
        top: 86%;
        right: 5%;
    }


`


const HeroSection = () => {
  return (
    <StyledHeroSection id='hero'>
        <Title>Soluções jurídicas com respeito e profissionalismo</Title>
        <Linha/>
        <SubTitle>Ajudamos você a solucionar problemas</SubTitle>
        <Btn>AGENDE UMA REUNIÃO</Btn>
        
        {/* <Zap src={zap}/> */}
    </StyledHeroSection>
  )
}



export {Btn};
export default HeroSection


