import styled from 'styled-components'
import React from 'react'
import logo from '../images/logo-nobg.svg'
import phone from '../images/phone-icon.svg'
import insta from '../images/insta-icon.svg'
import linkedin from '../images/linkedin-icon.svg'
import face from '../images/face-icon.svg'
import { Link } from 'gatsby'


const Menu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2F3245;
    top: 0;
    z-index: 999;
`



const MenuLinks = styled.ul`
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    list-style: none;
    padding: 0;
    margin: 0;
    padding-right: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    
    li:last-child{
        background-color: white;
        color: black;
        font-weight: 500;
        padding: 0.9em 1.5em;
    }

`

const Links = styled(Link)`
    padding: 0.8em 1.2em;
    border-radius: 9px;
    cursor: pointer;
    white-space: nowrap;
    font-weight: 500;
    text-decoration: none;
    color: white;
    transition: 0.3s;

    :hover {
        background-color: white;
        color: #0A0C1A;
    }
`
const LinkHome = styled(Links)`

    :hover{
        cursor: pointer;
        background-color: transparent;
    }
`

const LinkContato = styled(Links)`
    text-decoration: ${({location}) => location?.pathname == '/#contact' ? 'underline' : 'null'};
`

const LinkBlog = styled(Links)`
    background-color: ${({location}) => location?.pathname == '/blog' ? 'white' : 'null'};
    color: ${({location}) => location?.pathname == '/blog' ? '#0A0C1A' : 'null'};
`

const LinkAbout = styled(Links)`
    background-color: ${({location}) => location?.pathname == '/about' ? 'white' : 'null'};
    color: ${({location}) => location?.pathname == '/about' ? '#0A0C1A' : 'null'};
`

const LinkService = styled(Links)`
     background-color: ${({location}) => location?.pathname == '/services' ? 'white' : 'null'};
    color: ${({location}) => location?.pathname == '/services' ? '#0A0C1A' : 'null'};
`

const Imagem = styled.img`
    padding-left: 20px;
`


const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const MenuDesktop = ({location}) => {

  return (
    <Menu id='menu'>

        <Wrapper>
            <LinkHome to='/'>
                <Imagem src={logo} width='250'/>
            </LinkHome>
            <MenuLinks>
              
                <LinkAbout location={location} to='/about'> o escritório </LinkAbout>
                <LinkService location={location} to='/services'> áreas de atuação </LinkService>
                <LinkBlog location={location} to='/blog'> blog</LinkBlog>
                <LinkContato to='/#contact'> contato</LinkContato>

              
            </MenuLinks>
        </Wrapper>
        
    </Menu>
  )
}

export default MenuDesktop



