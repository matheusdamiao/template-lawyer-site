import React from 'react'
import styled from 'styled-components'
import logo from "../images/logo-nobg.svg"
import {PhoneCall} from '@styled-icons/boxicons-solid/PhoneCall'
import {LocationPin} from '@styled-icons/entypo/LocationPin'
import { TimeFive } from '@styled-icons/boxicons-solid/TimeFive'


export const Wrapper = styled.div`
    width: 100%;
    /* background-color: #0A0C1A; */
    background-color: #0C0A0A;
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat';
`
export const WrapperContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    color: white;
    padding: 100px 40px;

    @media screen and (max-width: 800px) {
        flex-direction: column;
         padding: 80px 40px;
         gap: 50px;
         align-items: center;

    }
`
export const Logo = styled.img`
    width: 25%;
    @media screen and (max-width: 800px) {
        width: 80%;
    }

`
export const Contato = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    @media screen and (max-width: 800px) {
        width: 100%;
    }
`

export const ContatoContent = styled.div`
    display: flex;
    gap: 20px;
`

export const Info = styled.p`
    font-weight: 200;
`

export const IconAddress = styled(LocationPin)`
    max-width: 30px;
`
export const IconTime = styled(TimeFive)`
    max-width: 30px;

`

export const IconPhone = styled(PhoneCall)`
    max-width: 30px;
    
`
export const Title = styled.p`
    font-weight: 800;
`

export const SiteMap = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    gap: 20px;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`

export const Link = styled.a`
 cursor: pointer;

:hover{
    text-transform: underline;
}
`

export const Rights = styled.p`
    text-align: center;
    color: white;
   
`

export const Author = styled.code`
    text-align: center;
    color: white;
    padding-bottom: 50px;
    font-size: 12px;
`




export const FooterSection = () => {
    return (
        <Wrapper>
            <WrapperContent>
                <Logo src={logo} alt=''/>
                <Contato>
                    <Title> Contato</Title>
                    <ContatoContent>
                        <IconAddress/>
                        <Info>Av. Primeiro de Setembro, 2920 - São Paulo</Info>        
                    </ContatoContent>
                    <ContatoContent>
                        <IconTime/>
                        <Info>8:00 - 18:00</Info>
                    </ContatoContent>
                    <ContatoContent>
                        <IconPhone/>
                        <Info>(21) 93829-2938 | (21) 93829-2938</Info>
                    </ContatoContent>
                </Contato>
                <SiteMap>
                    <Title> Site</Title>
                    <Link> sobre nós</Link>
                    <Link> depoimentos</Link>
                    <Link> áreas de atuação</Link>
                    <Link> blog</Link>

                </SiteMap>    
            </WrapperContent>
            <Rights>
                 Todos os direitos reservados a Pedro Menezes advocacia ltda.
            </Rights>
            <Author>
                Desenvolvido por Matheus Damião 
            </Author>
        </Wrapper>
    )
}