import styled from "styled-components"
import React from "react"

export const Wrapper = styled.div`
  max-width: 300px;
  width: 100%;
  height: 280px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0a0e28;
  border-radius: 9px;
  transition: 0.4s;

  @media screen and (max-width: 800px) {
    max-width: 250px;
    height: 250px;
  }

  :hover {
    transform: scale(1.05);
  }
`

export const Icon = styled.img`
 
`

export const Title = styled.h3`
  font-family: "Montserrat";
  font-size: 18px;
  font-weight: 400;

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`

export const Body = styled.p`
  font-family: "Montserrat";
  width: 60%;
  text-align: center;
  font-size: 12px;
  font-weight: 100;

  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`

export const Card = ({ icon, title, body }) => {
  return (
    <Wrapper>
      {icon}
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Wrapper>
  )
}
