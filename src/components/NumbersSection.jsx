import React from "react"
import styled from "styled-components"
import Heading from "./Heading"

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Number = styled.h1`
  color: #634636;
  font-size: 70px;
  font-family: "Montserrat";
  font-weight: 500;
  margin: 0;
`
export const Title = styled.h3`
  color: #00041c;
  font-family: "Montserrat";
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`
export const Plus = styled.span`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 40px;
`
export const DataDiv = ({ number, title }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Plus>+</Plus>
      <Div>
        <Number>{number}</Number>
        <Title>{title}</Title>
      </Div>
    </div>
  )
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 100px;
`

export const WrapperContent = styled.div`
  width: 100%;
  padding-top: 50px;
  display: flex;
  align-items: center;
  gap: 100px;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    padding-top: 20px;
    flex-direction: column;
    gap: 50px;
  }
`

export const NumbersSection = () => {
  return (
    <Wrapper>
      <Heading
        isWhite={false}
        isCenter={true}
        h1="Experiência em números"
        h3="Diferenciais"
        h2=""
      />
      <WrapperContent>
        <DataDiv number="900" title="processos" />
        <DataDiv number="200" title="clientes" />
        <DataDiv number="300" title="casos resolvidos" />
        <DataDiv number="300" title="processos" />
      </WrapperContent>
    </Wrapper>
  )
}
