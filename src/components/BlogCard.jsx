import React from 'react';
import styled from 'styled-components'


export const Wrapper = styled.div`
    width: 400px;
    height: 500px;
    color: #000000;
    display: flex;
    flex-direction: column;
    background-color:white;
    border-radius: 9px;

    @media screen and (max-width: 500px) {
        min-width: 250px;
    }
`
export const Imagem = styled.img`
    max-height: 200px;
    min-height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 9px 9px 0px 0px;

`

export const WrapperContent = styled.div`
   padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 28px;
    position: relative;
`

export const Title = styled.h3`
     font-family: "Montserrat";
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
    color: #A3A3A3;
    font-family: 'Montserrat';
    font-size: 10px;
`
export const Hashtag = styled.p`    
    padding-left: 20px;
    font-family: 'Montserrat';
    font-size: 12px;
`
export const Body = styled.p`
    font-family: 'Montserrat';
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

export const Author = styled.div`
    position: absolute;
    bottom: 10%;
    display: flex;
    gap: 20px;
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
    font-family: 'Montserrat';
    font-size: 15px;

    @media screen and (max-width: 500px) {
        font-size: 12px;
    }
`
export const Bio = styled.h5`
    font-family: 'Montserrat';
    color: #A3A3A3;
    font-size: 10px;
    margin: 0;
`

export const BlogCard = ({title, imagem, date, author, avatar, hashtags, link, description}) =>{

   let tags = hashtags?.join(', ')
    console.log(tags)

    return(
        <Wrapper>
            
            <Imagem src={imagem}/>
            <WrapperContent>
                <Title>{title}</Title>
                <WrapperInfo>
                    <Date>{date}</Date>
                    <Hashtag>{tags}</Hashtag>
                </WrapperInfo>
                <Body>{ description} </Body>
                <Author>
                    <Avatar src={avatar}/>
                    <AvatarInfo>
                        <Name>{author}</Name>
                        <Bio>Advogado</Bio>
                    </AvatarInfo>
                </Author>
            </WrapperContent>
        </Wrapper>
    )
}