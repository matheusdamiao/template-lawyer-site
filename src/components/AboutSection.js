import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'
import pic from '../images/about-pic.svg'
import {Btn} from './HeroSection'

const Wrapper = styled.div`
    margin-top: 200px;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0px 20px;
    
    @media screen and (max-width: 1000px){
        height: 100%;
        margin-top: 100px;
        
    }

`

const Foto = styled.img`
    width: 600px;
    position: relative;
    right: 90%;
    bottom: 43%;
    opacity: 0.8;
    

    @media screen and (max-width: 1100px){
        left: 20px;
        order: 2;
        bottom: 0;
        width: 60%;
        object-position: center;
       
    }

    @media screen and (max-width: 800px){
        right: 0;
        order: 2;
        bottom: 0;
        width: 80%;
        object-fit: center;
        
        
    }
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    

    @media screen and (max-width: 1100px){
        flex-wrap: nowrap;
        width: 100%;
        gap: 20px;
        
    }
`
const BodyText = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.5px;
    color: #182260;
    width: 80%;
    margin-top: 100px;
    margin-bottom: 50px;
    box-sizing: border-box;
    padding: 0 20px;

    
    @media screen and (max-width: 1100px){
       order: 3;
       width: 95%;
       margin-top: 40px;
       font-size: 12px;
    }

`

const StyledBtn = styled(Btn)`

    margin-left: 20px;
    margin-bottom: 20px;

     @media screen and (max-width: 1100px){
       order: 4;
    }
`

const AboutSection = () => {
  return (
    <Wrapper>
      <Div>
        <Heading
        
        h1='Há 5 anos resolvendo conflitos jurídicos'
        h3='Quem somos'
        h2='Somos referência em advocacia tributária e trabalhista'
        />
        <BodyText>
        Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc
        </BodyText>
        <StyledBtn>Conheça melhor</StyledBtn>
        <Foto src={pic}/>

      </Div>  

    </Wrapper>
  )
}

export default AboutSection
