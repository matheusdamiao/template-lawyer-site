import React from 'react';
import styled from 'styled-components'


export const Wrapper = styled.div`
    max-width: 600px;
    color: #000000;
    display: flex;
    flex-direction: column;
    background-color:white;
    height: 100%;
`
export const Imagem = styled.img`
    max-height: 200px;
    width: 100%;
`

export const WrapperContent = styled.div`
   padding-left: 45px;
    padding-right: 45px;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 28px;
`

export const Title = styled.h3`
     font-family: "Montserrat";
        font-size: 18px;
        margin: 0;

`
export const WrapperInfo = styled.div`
    display: flex;
    margin-top: 10px;
`

export const Date = styled.small`
    color: #A3A3A3;
    font-family: 'Montserrat';
    font-size: 10px;
`
export const Hashtag = styled.p`
    
`
export const Body = styled.p`
    font-family: 'Montserrat';
    font-weight: 300;
    font-size: 12px;
`

export const Author = styled.div`
    bottom: 20px;
    position: absolute;
    display: flex;
    gap: 20px;
`

export const Avatar = styled.img`
    max-height: 70px;
    
    
`

export const AvatarInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
`

export const Name = styled.h3`
    margin: 0;
`
export const Bio = styled.h5`
    font-family: 'Montserrat';
    color: #A3A3A3;
    font-size: 10px;
    margin: 0;
`

export const BlogCard = ({title, imagem, date, author, avatar, hashtags, link, description}) =>{

    return(
        <Wrapper>
            
            <Imagem src={imagem}/>
            <WrapperContent>
                <Title>{title}</Title>
                <WrapperInfo>
                    <Date>{date}</Date>
                    <Hashtag>{hashtags}</Hashtag>
                    <Hashtag>{hashtags}</Hashtag>
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