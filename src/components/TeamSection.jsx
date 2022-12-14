import React from "react"
import styled from "styled-components"
import Heading from "./Heading"
import FotoAdvogada from "../images/foto-advogada.svg"
import FotoAdvogado from "../images/foto-advogado.svg"

export const Wrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  width: 100%;

  @media screen and (max-width: 900px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`

export const WrapperContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 150px;
  padding-top: 50px;

  @media screen and (max-width: 900px) {
    gap: 50px;
  }
`

export const BioAdvogado = styled.div`
  max-width: 350px;

  @media screen and (max-width: 900px) {
    padding-left: 10px;
  }
`
export const Foto = styled.img``
export const Nome = styled.h3`
  font-family: "Montserrat";
  font-weight: 800;
  font-size: 24px;
  margin-top: 30px;
  white-space: nowrap;

  @media screen and (max-width: 900px) {
    white-space: normal;
    font-size: 16px;
  }
`
export const Bio = styled.p`
  font-family: "Montserrat";
  line-height: 165.4%;
  letter-spacing: 0.5px;
  color: #00041c;

  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
`
export const Button = styled.button`
  background-color: #634636;
  font-family: "Montserrat";
  height: 50px;
  width: 200px;
  color: #f0f4f8;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.25px;
  border: none;
  border-radius: 9px;
  cursor: pointer;
  text-transform: uppercase;

  @media screen and (max-width: 900px) {
    width: 150px;
    font-size: 10px;
    height: 40px;
  }
`

export const TeamSection = () => {
  return (
    <Wrapper>
      <Heading
        isWhite={false}
        isCenter={true}
        h1="Somos um time de advogados"
        h3="equipe"
        h2="Somos referência em advocacia tributária e trabalhista"
      />
      <WrapperContent>
        <BioAdvogado>
          <Foto src={FotoAdvogada} />
          <Nome>Dra. Joana da Silva Medeiros</Nome>
          <Bio>
            Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum
            dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc
            etc Lorem ipsum dolorem etc etc. 
          </Bio>
          <Button>Saiba mais</Button>
        </BioAdvogado>
        <BioAdvogado>
          <Foto src={FotoAdvogado} />
          <Nome>Dr. Pedro Menezes Almeida</Nome>
          <Bio>
            Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum
            dolorem etc etc Lorem ipsum dolorem etc etc Lorem ipsum dolorem etc
            etc Lorem ipsum dolorem etc etc. 
          </Bio>
          <Button>Saiba mais</Button>
        </BioAdvogado>
      </WrapperContent>
    </Wrapper>
  )
}
