import styled from "styled-components"
import React from "react"
import { Card } from "./Card"
import Heading from "./Heading"
import { People } from "@styled-icons/material/People"
import { CartCheck } from "@styled-icons/bootstrap/CartCheck"
import { DocumentCheckmark } from "@styled-icons/fluentui-system-filled/DocumentCheckmark"
import { BusinessTime } from "@styled-icons/fa-solid/BusinessTime"
import { MonetizationOn } from "@styled-icons/material/MonetizationOn"
import { MobileFriendly } from "@styled-icons/material/MobileFriendly"

export const IconPeople = styled(People)`
  max-width: 70px;

  @media screen and (max-width: 800px) {
    max-width: 50px;
  }
`
export const IconCart = styled(CartCheck)`
  max-width: 70px;
  @media screen and (max-width: 800px) {
    max-width: 50px;
  }
`
export const IconContract = styled(DocumentCheckmark)`
  max-width: 70px;
  @media screen and (max-width: 800px) {
    max-width: 50px;
  }
`

export const IconSuit = styled(BusinessTime)`
  max-width: 70px;
  @media screen and (max-width: 800px) {
    max-width: 50px;
  }
`

export const IconMoney = styled(MonetizationOn)`
  max-width: 70px;
  @media screen and (max-width: 800px) {
    max-width: 50px;
  }
`

export const IconMobile = styled(MobileFriendly)`
  max-width: 70px;
  @media screen and (max-width: 800px) {
    max-width: 50px;
  }
`

export const Wrapper = styled.div`
  margin-top: 200px;
  padding-top: 100px;
  width: 100%;
  height: 100%;
  background-color: #0A0C1A;
`

export const WrapperContent = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-left: 100px;
  padding-right: 100px;
  gap: 50px;

  @media screen and (max-width: 800px) {
    padding-left: 0;
    padding-right: 0;
  }
`

const dataCards = [
  {
    title: "Direito Civil",
    icon: <IconPeople />,
    body: "Lorem ispum dolorem amet. Lorem ispum dolorem amet.Lorem ispum dolorem amet.",
  },
  {
    title: "Direito do consumidor",
    icon: <IconCart />,
    body: "Lorem ispum dolorem amet. Lorem ispum dolorem amet.Lorem ispum dolorem amet.",
  },
  {
    title: "Direito contratual",
    icon: <IconContract />,
    body: "Lorem ispum dolorem amet. Lorem ispum dolorem amet.Lorem ispum dolorem amet.",
  },
  {
    title: "Direito trabalhista",
    icon: <IconSuit />,
    body: "Lorem ispum dolorem amet. Lorem ispum dolorem amet.Lorem ispum dolorem amet.",
  },
  {
    title: "Direito tributário",
    icon: <IconMoney />,
    body: "Lorem ispum dolorem amet. Lorem ispum dolorem amet.Lorem ispum dolorem amet.",
  },
  {
    title: "Direito Digital",
    icon: <IconMobile />,
    body: "Lorem ispum dolorem amet. Lorem ispum dolorem amet.Lorem ispum dolorem amet.",
  },
]

export const ServicesSection = () => {
  return (
    <Wrapper>
      <Heading
        isWhite={true}
        isCenter={true}
        h3="Áreas de atuação"
        h1="Serviços que ofereçemos"
        h2="Somos referência em advocacia tributária e trabalhista"
      />
      <WrapperContent>
        {dataCards.map(card => {
          return <Card title={card.title} icon={card.icon} body={card.body} />
        })}
      </WrapperContent>
    </Wrapper>
  )
}
