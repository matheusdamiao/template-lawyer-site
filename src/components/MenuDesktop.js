import styled from 'styled-components'
import React from 'react'
import logo from '../images/logo.svg'
import phone from '../images/phone-icon.svg'
import insta from '../images/insta-icon.svg'
import linkedin from '../images/linkedin-icon.svg'
import face from '../images/face-icon.svg'



const Menu = styled.div`
    width: 100%;
    height: 135px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #00041C;
    top: 0;
    position: fixed;
    z-index: 999;
`


const TopBar = styled.div`
    width: 100%;
    height: 40px;
    background-color: #634636;
    display: flex;
    justify-content: flex-end;
    color: white;
`

const Telefones = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 14px;
`
const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding-left: 50px;
    padding-right: 80px;

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
        <TopBar>
            <Telefones>
                <img src={phone} alt=''/>
                <span>(21) 93829-2938 </span>
                <span> (21) 93829-2938 </span>
            </Telefones>
            <SocialMedia> 
                <img src={insta} alt='' width={25} />
                <img src={linkedin} alt='' width={25}/>
                <img src={face} alt='' width={30}/>

            </SocialMedia>
        </TopBar>
        <Wrapper>
            <Imagem src={logo} width='300'/>
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



