import styled from "styled-components"
import React from "react"

const H1 = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 74px;
  color: ${({ isWhite }) => (isWhite ? "#FFFF" : "#00041c")};
  margin: 0;
  margin-top: 0px;
  padding: 0 20px;
  text-align: ${({ isCenter }) => (isCenter ? "center" : "left")};

  @media screen and (max-width: 800px) {
    font-size: 27px;
    line-height: 32px;
  }
`

const H2 = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  line-height: 136.4%;
  color: ${({ isWhite }) => (isWhite ? "#FFFF" : "#00041c")};
  padding: 0 20px;
  text-align: ${({ isCenter }) => (isCenter ? "center" : "left")};

  @media screen and (max-width: 800px) {
    font-size: 16px;
    width: 80%;
  }
`

const H3 = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: ${({ isWhite }) => (isWhite ? "#FFFF" : "#00041c")};
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

const Heading = ({ h3, h1, h2, isWhite, isCenter }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: `${isCenter ? "center" : "flex-start"}`,
      }}
    >
      <H3 isWhite={isWhite}> {h3}</H3>
      <Linha />
      <H1 isWhite={isWhite} isCenter={isCenter}>
        {" "}
        {h1}
      </H1>
      <H2 isWhite={isWhite} isCenter={isCenter}>
        {" "}
        {h2}
      </H2>
    </div>
  )
}

export default Heading
