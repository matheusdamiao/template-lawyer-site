import styled from 'styled-components'
import React from 'react'


const H1 = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 61px;
    line-height: 74px;
    color: #00041C;
    margin: 0;
    margin-top: 20px;
    padding: 0 20px;


    @media screen and (max-width: 800px) {
      font-size: 27px;
      line-height: 32px;
      
    }
`

const H2 = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 200;
    font-size: 24px;
    line-height: 136.4%;
    color: #00041C;
    width: 80%;
    padding: 0 20px;


    @media screen and (max-width: 800px) {
      font-size: 16px;
      width: 80%;
    }
`

const H3 = styled.h3`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: #00041C;
    padding: 0 20px;

    @media screen and (max-width: 800px) {
      font-size: 12px;
      

    }
`

const Linha = styled.span`
    border: 3px solid #634636;
    width: 300px;
      margin: 0px 20px;


    @media screen and (max-width: 800px) {
      font-size: 9px;
      width: 150px;

    }
`



const Heading = ({h3, h1, h2}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <H3> {h3}</H3>
      <Linha/>
      <H1> {h1}</H1>
      <H2> {h2}</H2>
      
    </div>
  )
}

export default Heading
