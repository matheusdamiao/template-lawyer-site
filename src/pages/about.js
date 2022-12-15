import React from "react"
import Seo from "../components/seo"
import Media from "react-media"
import MenuMobile from "../components/MenuMobile"
import MenuDesktop from "../components/MenuDesktop"
import styled from "styled-components"
import heroBg from "../images/hero-about.svg"
import { FooterSection } from "../components/FooterSection"
import Heading from "../components/Heading"
import office from "../images/escritorio-pic.svg"
import adv1 from "../images/adv1.svg"
import adv2 from "../images/adv2.svg"

const About = ({ location }) => {
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
          <p> O Escritório </p>
        </BreadCrumb>
        <Hero>
          <Title>Nosso escritório </Title>
          <Stroke />
          <SubTitle>
            {" "}
            Somos especialistas em resolver problemas jurídicos{" "}
          </SubTitle>
        </Hero>
        <WrapperContent>
          <Heading
            isWhite={true}
            isCenter={false}
            h3=""
            h1="Resolvemos conflitos jurídicos"
            h2="Somos referência em advocacia tributária e trabalhista"
          />
          <Escritorio>
            <Info>
              <Titulo>O escritório</Titulo>
              <BodyText>
                Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem
                ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum
                dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem
                etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc
                Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem
                ipsum dolorem etc etc.{" "}
              </BodyText>
            </Info>
            <Valores>
              <Titulo>Valores</Titulo>
              <BodyText>
                Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem
                ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum
                dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem
                etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc
                Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem
                ipsum dolorem etc etc.{" "}
              </BodyText>
            </Valores>
            <Picture src={office} alt="office picture" />
          </Escritorio>

          <Equipe>
            <Heading
              isWhite={true}
              isCenter={false}
              h3=""
              h1="Equipe"
              h2="Conheça os advogados que compõem nossa equipe"
            />
            <Advogado>
              <Bio>
                <Nome> Dra. Joana da Silva Medeiros </Nome>
                <OAB> OAB 434349</OAB>
              </Bio>
              <BioText>
                Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem
                ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum
                dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem
                etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc
                Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem
                ipsum dolorem etc etc
              </BioText>
              <Button>Currículo</Button>
              <FotoAdv1 src={adv1} />
            </Advogado>
            <Advogado>
              <Bio>
                <Nome> Dr. Pedro Menezes </Nome>
                <OAB> OAB 23499</OAB>
              </Bio>
              <BioText>
                Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem
                ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum
                dolorem etc etc Lorem ipsum dolorem etc etc. Lorem ipsum dolorem
                etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc
                Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem
                ipsum dolorem etc etc
              </BioText>
              <Button>Currículo</Button>
              <FotoAdv2 src={adv2} />
            </Advogado>
          </Equipe>
        </WrapperContent>
        <FooterSection />
      </Wrapper>
    </>
  )
}

export default About

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
    font-weight: 600;
    text-decoration: underline;
  }
`

const Hero = styled.div`
  background-image: url(${heroBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #ffffff;
  width: 100%;
  height: 450px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  color: white;
  position: relative;

  @media screen and (max-width: 800px) {
    background-position: -300px 40px;
  }

  @media screen and (max-width: 500px) {
    background-position: -500px 50px;
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
    padding-left: 50px;
    padding-top: 100px;
  }
`

const SubTitle = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 37px;
  letter-spacing: -0.218294px;
  color: #00041c;
  padding-left: 90px;
  margin-top: 20px;

  @media screen and (max-width: 760px) {
    font-size: 20px;
    padding-left: 50px;
    width: 80%;
  }
`

const Stroke = styled.span`
  border: 2px solid #3d2b21;
  width: 300px;
  margin-top: 20px;
  margin-left: 95px;

  @media screen and (max-width: 760px) {
    font-size: 12px;
    background-color: #2f3245;
    margin-left: 50px;
  }
`

const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 100px;
  padding-left: 80px;
  padding-right: 20px;
  padding-bottom: 100px;
  gap: 50px;

  @media screen and (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

const Escritorio = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  font-family: "Montserrat";
  position: relative;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`

const Info = styled.div`
  color: white;
  max-width: 500px;
  padding-left: 20px;

  @media screen and (max-width: 1200px) {
    order: 2;
  }
`

const Titulo = styled.h3`
  font-size: 24px;
`
const BodyText = styled.p`
  line-height: 165.4%;
  font-size: 14px;
  letter-spacing: 0.5px;
`

const Valores = styled.div`
  color: white;
  max-width: 500px;
  padding-left: 20px;

  @media screen and (max-width: 1200px) {
    order: 1;
  }
`

const Picture = styled.img`
  position: absolute;
  left: 50%;
  bottom: 5%;
  max-width: 650px;
  width: 100%;

  @media screen and (max-width: 1200px) {
    position: static;
    order: 3;
  }
`
const Equipe = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: white;
  width: 100%;
  font-family: "Montserrat";
`

const Advogado = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  padding-top: 60px;
  position: relative;
  height: 100%;
  margin-bottom: 50px;

  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
    margin-bottom: 50px;
  }
`
const Bio = styled.div`
  padding-bottom: 40px;

  @media screen and (max-width: 1200px) {
    order: 4;
  }
`
const Nome = styled.h3`
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;
`
const OAB = styled.small`
  font-size: 14px;
  font-weight: 100;
  letter-spacing: 1.2px;
`

const BioText = styled.p`
  max-width: 500px;
  line-height: 165.4%;
  font-size: 14px;
  letter-spacing: 0.5px;
`

const Button = styled.button`
  width: 150px;
  background-color: #3a3e54;
  padding: 10px 20px;
  border-radius: 9px;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  border: none;
  font-weight: 600;
  letter-spacing: 1.25px;
  margin-top: 50px;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    order: -1;
  }
`

const FotoAdv1 = styled.img`
  max-width: 650px;
  position: absolute;
  left: 50%;
  top: 10%;

  @media screen and (max-width: 1200px) {
    position: static;
    order: 3;
  }
`

const FotoAdv2 = styled.img`
  max-width: 650px;
  position: absolute;
  left: 50%;
  top: 20%;

  @media screen and (max-width: 1200px) {
    position: static;
    order: 3;
  }
`
