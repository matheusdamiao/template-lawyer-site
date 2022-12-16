import styled, { keyframes } from "styled-components"
import React, { useState } from "react"
import logo from "../images/logo-nobg.svg"
import { Link } from "gatsby"

const Menu = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.2rem;
  background-color: #2f3245;
  margin: 0;
  padding: 0;
  position: fixed;
  z-index: 99999;
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

  span:first-child {
    transition: 0.4s;
    transform: ${props =>
      props.isActive === true ? "rotate(45deg) translate(4px, 8px)" : null};
  }

  span:nth-child(2) {
    transition: 0.4s;
    transform: ${props =>
      props.isActive === true ? "rotate(-45deg) translate(-3px, -2px)" : null};
  }

  span:last-child {
    display: ${props => (props.isActive === true ? "none" : "block")};
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
  top: 100px;
  right: 0;
  position: absolute;
  height: calc(100% - 100px);
  color: white;
  transition: all 0.5s;
  overflow: hidden;
  width: 40%;
  display: ${props => (props.isActive === true ? "flex" : "none")};
  animation: ${slide} 0.7s ease;
  z-index: 9999;
  flex-direction: column;
  gap: 25px;
  background-color: #2f3245;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  position: fixed;
`

const Links = styled(Link)`
  padding: 0.8em 1em;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  color: white;

  :visited {
    text-decoration: none;
    color: white;
  }

  :hover {
    background-color: white;
    color: black;
  }

  :active {
    text-decoration: none;
  }
`

export const LinkLogo = styled(Links)`
  :hover {
    background-color: transparent;
  }
`

const MenuMobile = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <Menu id="menu">
        <LinkLogo to="/">
          <Logo src={logo} alt="logo" width={200} />
        </LinkLogo>
        <HamburgerMenu
          isActive={isActive}
          onClick={() => setIsActive(!isActive)}
        >
          <Linha></Linha>
          <Linha></Linha>
          <Linha></Linha>
        </HamburgerMenu>
      </Menu>
      <SideMenu isActive={isActive}>
        <Links href="/about"> Sobre nós</Links>
        <Links href="/services"> Áreas de atuação </Links>
        <Links to="/blog"> Blog</Links>
        <Links href="#contact"> Contato</Links>
      </SideMenu>
    </>
  )
}

export default MenuMobile
