import styled, { keyframes } from 'styled-components'
import React, { useState } from 'react'
import logo from '../images/logo.svg'

const Menu = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.2rem;
    background-color: #00041C;
    margin: 0;
    padding: 0;
    
`
const Logo = styled.img`
    padding-left: 20px;

    @media screen and (max-width: 400px) {
        padding-left: 0px;
    }
`

const HamburgerMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-right: 20px;
    cursor: pointer;
   
   span:last-child{
    display: ${(props)=> props.isActive === true ? 'none': 'block'}
   }



`

const Linha = styled.span`
    width: 25px;
    height: 3px;
    display: block;
    background-color: white;


`
const slide = keyframes`
    from {
        
        width: 0%;
            }
    to {
       width: 40%;
    }
`

const SideMenu = styled.div`
    right: 0;
    position: absolute;
    height: calc(100% - 100px);
    background-color: black;
    color: white;
    transition: all 1s;
    overflow: hidden;
    width: 40%;
     display: ${(props)=> props.isActive === true ? 'flex': 'none'};
    animation: ${slide} 1s ease;
    z-index: 9999;
    flex-direction: column;
    gap: 25px;
    background-color: #00041C;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    
`

const Link = styled.a`
    padding: 0.8em 1em;
    cursor: pointer;
    white-space: nowrap;
    font-weight: 500;
    text-decoration: none;
    text-align: center;

    
   
    :visited {
        text-decoration: none;
        color: white;
    }

    :hover {
        background-color: white;
        color: black;
        
    }

    :active{
        text-decoration: none;
    }

   
`

const MenuMobile = () => {

    const [isActive, setIsActive] = useState(false)


  return (
    <>
    <Menu>
        <Logo src={logo} alt='logo' width={250}/>
        <HamburgerMenu isActive={isActive} onClick={()=> setIsActive(!isActive)}>
            <Linha></Linha>
            <Linha></Linha>
            <Linha></Linha>
        </HamburgerMenu>
        
    </Menu>
    <SideMenu isActive={isActive}> 
       <Link href="#"> Sobre nós</Link>
       <Link href="#"> Áreas de atuação </Link>
       <Link href="#"> Blog</Link>
       <Link href="#"> Contato</Link>
     </SideMenu>
    </>
  )
}



export default MenuMobile