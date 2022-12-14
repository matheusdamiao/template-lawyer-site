import React from "react"
import Seo from "../components/seo"
import Media from "react-media"
import MenuMobile from "../components/MenuMobile"
import MenuDesktop from "../components/MenuDesktop"
import styled from 'styled-components'
import heroBg from '../images/hero-services.svg'
import { FooterSection } from "../components/FooterSection"


const Services = ({ location}) => {


  return (
    <>
    <Media query="(max-width: 900px)" render={() => <MenuMobile location={location} />} />
    <Media query="(min-width: 900px)" render={() => <MenuDesktop location={location}/>} />
    
    <Wrapper>
      <BreadCrumb>
        <a href='/'>Home </a> 
        <small> &gt; </small> 
        <p> Áreas de atuação </p>
      </BreadCrumb>
      <Hero>
        <Title>Nossas áreas de atuação </Title>
        <Stroke/>
        <SubTitle> Somos especialistas em resolver problemas jurídicos </SubTitle>
      </Hero>
      <Posts>
         
      </Posts>
      <FooterSection />
    </Wrapper>



    </>


  )
}

export default Services

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => {
  <>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    <Seo title="All posts" />
 </>
}



export const Wrapper = styled.div`
  background-color: #0A0C1A;
  min-height: 100vh;
  width: 100%;
`

export const BreadCrumb = styled.div `
  padding-top: 20px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 100px;
  left: 50px;
  z-index: 999;
  gap: 10px;
  font-family: 'Montserrat';

  a{
    color: #f2f2f2;
    font-size: 12px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;

    :hover {
      text-decoration: underline;
    }
  }

  small{
    font-size: 16px;
    color: #f2f2f2;
    font-weight: 600;
  }

  p {
    color: #f2f2f2;
    font-size: 12px;
    text-decoration: underline;

  }
`

export const Hero = styled.div`
    background-image: url(${heroBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0px -60px;
    background-color: #FFFFFF;
    width: 100%;
    height: 450px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    color: white;
    position: relative;

    @media screen and (max-width: 800px) {
      background-position: -200px -40px;
    }
`
const Title = styled.h1`
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 45px;
    line-height: auto;
    text-align: left;
    letter-spacing: -0.5px;
    margin: 0;
    color: #00041C;
    max-width: 70%;
    padding-left: 90px;

    @media screen and (max-width: 760px){
        font-size: 40px;
        line-height: 50px;
        max-width: 90%;
        padding-left: 30px;
    }
`


const SubTitle = styled.h3`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 200;
    font-size: 25px;
    line-height: 37px;
    text-align: right;
    letter-spacing: -0.218294px;
    color: #00041C;
    padding-left: 90px;
    margin-top: 20px;

    @media screen and (max-width: 760px){
        font-size: 20px;
        padding-left: 30px;

    }

`


export const Stroke = styled.span`
   border: 2px solid #3D2B21;
    width: 300px;
    margin-top: 20px;
    margin-left: 95px;

    
    @media screen and (max-width: 760px){
        font-size: 12px;
        background-color: #2F3245;
        margin-left: 35px;
        
    }
`




export const Button = styled.button`
  margin-left: 20px;
  padding: 5px 20px;
  border-radius: 9px;
  border: none;
`

export const Posts = styled.div`
  /* width: 100%; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;

  gap: 50px;

  @media screen and (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`



