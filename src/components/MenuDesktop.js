import styled from 'styled-components'
import React from 'react'
import logo from '../images/logo-nobg.svg'
import phone from '../images/phone-icon.svg'
import insta from '../images/insta-icon.svg'
import linkedin from '../images/linkedin-icon.svg'
import face from '../images/face-icon.svg'



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

const Link = styled.li`
    padding: 0.8em 1em;
    border-radius: 9px;
    cursor: pointer;
    white-space: nowrap;
    font-weight: 500;
`

const Imagem = styled.img`
    padding-left: 40px;
`


const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const MenuDesktop = () => {
  return (
    <Menu>

        <Wrapper>
            <Imagem src={logo} width='250'/>
            <MenuLinks>
              
                <Link> sobre nós</Link>
                <Link> áreas de atuação</Link>
                <Link> blog</Link>
                <Link> contato</Link>

              
            </MenuLinks>
        </Wrapper>
        
    </Menu>
  )
}

export default MenuDesktop



