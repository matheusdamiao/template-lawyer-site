import React, { useEffect } from "react"
import styled from "styled-components"

export const Wrapper = styled.div`
  width: 400px;
  height: 500px;
  color: #000000;
  display: flex;
  justify-content: flex-end;
  position: relative;
  flex-direction: column;
  background-color: white;
  border-radius: 9px;

  @media screen and (max-width: 500px) {
    min-width: 250px;
  }
`
export const Imagem = styled.img`
  max-width: 400px;
  max-height: 500px;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  bottom: 0;
  position: absolute;
  object-fit: cover;
  border-radius: 9px 9px 9px 9px;
  transition: 0.4s;

  :hover {
    object-position: 35%;
    cursor: pointer;
  }
`

export const WrapperContent = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  height: 250px;
  display: flex;
  flex-direction: column;
  padding-top: 28px;
  position: relative;
  background: linear-gradient(
    112.45deg,
    rgba(255, 255, 255, 0.64) 33.53%,
    rgba(255, 255, 255, 0.64) 55.62%,
    rgba(255, 255, 255, 0.16) 103.33%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 9px 9px;
`

export const Title = styled.h3`
  font-family: "Montserrat";
  padding-top: 5px;
  font-size: 30px;
  margin: 0;
  font-weight: 500;

  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`
export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`

export const Date = styled.small`
  color: #3d3d3d;
  font-family: "Montserrat";
  font-size: 10px;
  font-weight: 600;
  position: absolute;
  top: 10px;
  padding-left: 5px;
`
export const Hashtag1 = styled.p`
  padding: 4px 15px;
  font-family: "Montserrat";
  font-size: 11px;
  background-color: #636363;
  border-radius: 9px;
  color: white;
`
export const Hashtag2 = styled.p`
  padding: 4px 15px;
  font-family: "Montserrat";
  color: white;
  font-size: 11px;
  background-color: #000000;
  border-radius: 9px;
`
export const Hashtag3 = styled.p`
  padding: 4px 15px;
  font-family: "Montserrat";
  font-size: 11px;
  background-color: #eeff83;
  border-radius: 9px;
`

export const Body = styled.p`
  font-family: "Montserrat";
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Author = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  width: 95%;
  align-items: center;
  justify-content: space-evenly;
  gap: -20px;
  padding-bottom: 10px;
`

export const Avatar = styled.img`
  max-height: 50px;
`
export const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`

export const Name = styled.h3`
  margin: 0;
  font-family: "Montserrat";
  font-size: 12px;

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`
export const Bio = styled.h5`
  font-family: "Montserrat";
  color: #a3a3a3;
  font-size: 10px;
  margin: 0;
`

export const Link = styled.a`
  color: #d3d3d3;
  font-family: "Montserrat";
  padding: 10px 20px;
  background-color: black;
  border-radius: 9px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  margin-left: 40px;
`

export const BlogCard = ({
  title,
  imagem,
  date,
  author,
  avatar,
  hashtags,
  link,
  description,
}) => {
  return (
    <Wrapper>
      <Imagem src={imagem} />
      <WrapperContent>
        <Title>{title}</Title>
        <WrapperInfo>
          <Hashtag1>{hashtags[0]}</Hashtag1>
          <Hashtag2>{hashtags[1]}</Hashtag2>
          <Hashtag3>{hashtags[2]}</Hashtag3>

          <Date>{date}</Date>
        </WrapperInfo>
        <Author>
          <Avatar src={avatar} />
          <AvatarInfo>
            <Name>{author}</Name>
            <Bio>Advogado</Bio>
          </AvatarInfo>
          <Link href={link}>Leia mais</Link>
        </Author>
      </WrapperContent>
    </Wrapper>
  )
}
