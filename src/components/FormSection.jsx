import React from 'react';
import styled from 'styled-components'
import Heading from "./Heading"
import formBg from '../images/backgroundForm.svg'
import {PhoneCall} from '@styled-icons/feather/PhoneCall'

export const Wrapper = styled.div`
    background-image: url(${formBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    min-height: 100vh;
    padding-bottom: 100px;
    margin-bottom: 50px;
`

export const Div = styled.div`
    padding-top: 100px;
`

export const WrapperContent = styled.div`
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    
    @media screen and (max-width: 800px){
        flex-wrap: wrap;
        padding-left: 20px;
        padding-right: 20px;
    }
`
export const WrapperContato = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const WrapperInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`


export const IconDiv = styled.div`
    background-color: white;
    border-radius: 50% 50%;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: none;
`

export const IconPhone = styled(PhoneCall)`
    max-width: 40px;
    color: #634636;
`

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

`
export const Label = styled.p`
    font-family: 'Montserrat';
    color: #634636;
    font-size: 18px;
    margin: 0;
`

export const Info = styled.p`
    font-family: 'Montserrat';
    color: black;
    font-size: 28px;
    margin: 0;

`


export const WrapperForm = styled.div`
    background-color: white;
    max-width: 500px;
    min-height: 400px;
    height: 100%;
    width: 100%;
    border-radius: 9px;
`
export const FormSection = () =>{


    return(
        <Wrapper>
            <Div>
                <Heading
                    isWhite={false}
                    isCenter={true}
                    h1="Precisa de consultoria jurídica?"
                    h3="fale conosco"
                    h2="Entre em contato agora mesmo conosco e agende uma reunião com nossa equipe. "
                    />
             </Div>
             <WrapperContent>
                <WrapperContato>
                    <WrapperInfo>
                        <IconDiv>
                            <IconPhone />
                        </IconDiv>
                        <InfoDiv>
                            <Label>
                                Telefone
                            </Label>
                            <Info>
                                (21) 93829-2938 <br/>
                                (21) 93829-2938
                            </Info>
                        </InfoDiv>
                    </WrapperInfo>

                    <WrapperInfo>
                        <IconDiv>
                            <IconPhone />
                        </IconDiv>
                        <InfoDiv>
                            <Label>
                                Endereço
                            </Label>
                            <Info>
                            Av. Primeiro de Setembro, 2920 - São Paulo
                            </Info>
                        </InfoDiv>
                    </WrapperInfo>

                    <WrapperInfo>
                        <IconDiv>
                            <IconPhone />
                        </IconDiv>
                        <InfoDiv>
                            <Label>
                                Horário de atendimento
                            </Label>
                            <Info>
                            8:00 - 18:00
                            </Info>
                        </InfoDiv>
                    </WrapperInfo>

                </WrapperContato>

                <WrapperForm>

                </WrapperForm>
             </WrapperContent>
        </Wrapper>
    )
}