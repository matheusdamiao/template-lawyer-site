import React from "react"
import styled from "styled-components"
import Heading from "./Heading"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper"
import avatar1 from "../images/avatar1.svg"
import avatar2 from "../images/avatar2.svg"
import avatar3 from "../images/avatar3.svg"
import { createGlobalStyle } from "styled-components"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export const GlobalStyle = createGlobalStyle`

    html {
      scroll-behavior: smooth;
    }


    body {

        .swiper {
          width: 90%;
          display: flex;
          justify-content: center;
        }

        .swiper-wrapper {
        height: 600px;
        display: flex;
        width: 100%;

        @media screen and (max-width: 800px){
            padding-left: 50px;
            padding-right: 50px;
            gap: 0px;
            
        }
        }   

        .swiper-slide{
            width: 100%;
            height: 80%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .swiper-pagination{
            width: 100px;
            
        }

        .swiper-pagination-bullet {
            background-color: white;
            width: 20px;
            height: 20px;
        }

        
    }
`

export const Wrapper = styled.div`
  background-color: #0A0C1A;
  padding-top: 100px;
  padding-bottom: 150px;
  height: 100%;
  width: 100%;
`

export const Slider = styled.div`
  width: 100%;
  height: 100%;
`

export const SwiperSlideStyled = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DepoimentosSection = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Heading
        isWhite={true}
        isCenter={true}
        h1="O relato dos nossos clientes"
        h3="Depoimentos"
        h2=""
      />
      <Slider>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            1000: { slidesPerView: 3 },
            900: { slidesPerView: 2 },
            500: { slidesPerView: 1 },
          }}
        >
          <SwiperSlideStyled>
            <DepoCard
              avatar={avatar1}
              name="Luciana Almeida"
              job="professora universitária"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum."
            />
          </SwiperSlideStyled>

          <SwiperSlideStyled>
            <DepoCard
              avatar={avatar2}
              name="Pedro Menezes"
              job="engenheiro elétrico"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum."
            />
          </SwiperSlideStyled>

          <SwiperSlideStyled>
            <DepoCard
              avatar={avatar3}
              name="Guilherme Henrique"
              job="empresário"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum."
            />
          </SwiperSlideStyled>

          <SwiperSlideStyled>
            <DepoCard
              avatar={avatar1}
              name="Luciana Almeida"
              job="professora universitária"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum."
            />
          </SwiperSlideStyled>
          <SwiperSlideStyled>
            <DepoCard
              avatar={avatar2}
              name="Pedro Menezes"
              job="engenheiro elétrico"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum."
            />
          </SwiperSlideStyled>

          <SwiperSlideStyled>
            <DepoCard
              avatar={avatar3}
              name="Guilherme Henrique"
              job="empresário"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum."
            />
          </SwiperSlideStyled>
        </Swiper>
      </Slider>
    </Wrapper>
  )
}

export const Card = styled.div`
  width: 350px;
  height: 510px;
  background-color: #0a0e28;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Montserrat";
  padding-top: 20px;
  flex: none;
`

export const AvatarPic = styled.img`
  left: 35%;
  top: -10%;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Name = styled.h3`
  margin: 0;
  color: #f0f4f8;
  font-size: 20px;
  font-weight: 400;
`

export const Job = styled.h4`
  margin: 0;
  color: #8d8d8d;
  font-size: 14px;
  margin-top: 5px;
  font-weight: 400;
`

export const Text = styled.p`
  padding-right: 50px;
  padding-left: 60px;
  font-size: 14px;
  font-weight: 300;
  line-height: 176.4%;
  letter-spacing: 0.5px;
  padding-top: 50px;
`

export const DepoCard = ({ avatar, name, job, text }) => {
  return (
    <Card>
      <AvatarPic src={avatar} alt="" />
      <Title>
        <Name>{name}</Name>
        <Job>{job}</Job>
      </Title>
      <Text>{text}</Text>
    </Card>
  )
}
