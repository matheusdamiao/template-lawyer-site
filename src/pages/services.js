import React from "react"
import Seo from "../components/seo"
import Media from "react-media"
import MenuMobile from "../components/MenuMobile"
import MenuDesktop from "../components/MenuDesktop"
import styled from "styled-components"
import heroBg from "../images/hero-services.svg"
import { FooterSection } from "../components/FooterSection"
import {
  IconCart,
  IconContract,
  IconMobile,
  IconMoney,
  IconPeople,
  IconSuit,
} from "../components/ServicesSection"

const IconPeopleLG = styled(IconPeople)`
  max-width: 80px;

  @media screen and (max-width: 760px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 60px;
  }
`

const IconCartLG = styled(IconCart)`
  max-width: 80px;

  @media screen and (max-width: 760px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 60px;
  }
`

const IconContractLG = styled(IconContract)`
  max-width: 80px;

  @media screen and (max-width: 760px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 60px;
  }
`
const IconSuitLG = styled(IconSuit)`
  max-width: 80px;

  @media screen and (max-width: 760px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 60px;
  }
`
const IconMoneyLG = styled(IconMoney)`
  max-width: 80px;

  @media screen and (max-width: 760px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 60px;
  }
`

const IconMobileLG = styled(IconMobile)`
  max-width: 80px;

  @media screen and (max-width: 760px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 60px;
  }
`

const lawAreas = [
  {
    title: "Direito Civil",
    icon: <IconPeopleLG />,
    body: "Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc.  ",
  },
  {
    title: "Direito do consumidor",
    icon: <IconCartLG />,
    body: "Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc.  ",
  },
  {
    title: "Direito contratual",
    icon: <IconContractLG />,
    body: "Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc.  ",
  },
  {
    title: "Direito trabalhista",
    icon: <IconSuitLG />,
    body: "Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc.  ",
  },
  {
    title: "Direito tributário",
    icon: <IconMoneyLG />,
    body: "Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc.  ",
  },
  {
    title: "Direito Digital",
    icon: <IconMobileLG />,
    body: "Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc.  ",
  },
]

const Services = ({ location }) => {
  return (
    <>
      <Media
        query="(max-width: 900px)"
        render={() => <MenuMobile location={location} />}
      />
      <Media
        query="(min-width: 900px)"
        render={() => <MenuDesktop location={location} />}
      />

      <Wrapper>
        <BreadCrumb>
          <a href="/">Home </a>
          <small> &gt; </small>
          <p> Áreas de atuação </p>
        </BreadCrumb>
        <Hero>
          <Title>Nossas áreas de atuação </Title>
          <Stroke />
          <SubTitle>
            {" "}
            Somos especialistas em resolver problemas jurídicos{" "}
          </SubTitle>
        </Hero>
        <WrapperContent>
          {lawAreas.map(area => {
            return (
              <Area>
                {area.icon}
                <Titulo>{area.title}</Titulo>
                <BodyText>{area.body}</BodyText>
              </Area>
            )
          })}
        </WrapperContent>
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
  ;<>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    <Seo title="All posts" />
  </>
}

const Area = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  color: rgb(240, 240, 240);
  max-width: 500px;
  width: 100%;
`
const Titulo = styled.h3`
  font-family: "Montserrat";
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1.2px;

  @media screen and (max-width: 760px) {
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
`
const BodyText = styled.p`
  line-height: 165.4%;
  letter-spacing: 0.5px;

  @media screen and (max-width: 760px) {
    font-size: 12px;
    padding-left: 20px;
    padding-right: 20px;
  }
`

const Wrapper = styled.div`
  background-color: #0a0c1a;
  min-height: 100vh;
  width: 100%;
`

const BreadCrumb = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 100px;
  left: 50px;
  z-index: 999;
  gap: 10px;
  font-family: "Montserrat";

  a {
    color: #2f3245;
    font-size: 12px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    font-weight: 600;

    :hover {
      text-decoration: underline;
    }
  }

  small {
    font-size: 16px;
    color: #2f3245;
    font-weight: 600;
  }

  p {
    color: #2f3245;
    font-size: 12px;
    text-decoration: underline;
    font-weight: 600;
  }
`

const Hero = styled.div`
  background-image: url(${heroBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0px -60px;
  background-color: #ffffff;
  width: 100%;
  height: 450px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  color: white;
  position: relative;

  @media screen and (max-width: 1400px) {
    background-position: 0px 0px;
  }

  @media screen and (max-width: 800px) {
    background-position: -400px 10px;
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

  @media screen and (max-width: 800px) {
    font-size: 40px;
    line-height: 50px;
    max-width: 90%;
    padding-left: 45px;
    padding-top: 150px;
  }
`

const SubTitle = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 37px;
  /* text-align: right; */
  letter-spacing: -0.218294px;
  color: #00041c;
  padding-left: 90px;
  margin-top: 20px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
    padding-left: 45px;
    line-height: 25px;
  }
`

const Stroke = styled.span`
  border: 2px solid #3d2b21;
  width: 200px;
  margin-top: 20px;
  margin-left: 95px;

  @media screen and (max-width: 800px) {
    font-size: 12px;
    background-color: #2f3245;
    margin-left: 45px;
  }
`

const WrapperContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;

  gap: 200px;

  @media screen and (max-width: 500px) {
    gap: 100px;
  }
`
