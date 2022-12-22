import React from "react"
import styled from "styled-components"
import Heading from "./Heading"
import formBg from "../images/backgroundForm.svg"
import { PhoneCall } from "@styled-icons/boxicons-solid/PhoneCall"
import { LocationPin } from "@styled-icons/entypo/LocationPin"
import { TimeFive } from "@styled-icons/boxicons-solid/TimeFive"

export const Wrapper = styled.div`
  background-image: url(${formBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 100px;
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

  @media screen and (max-width: 800px) {
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

export const IconLocation = styled(LocationPin)`
  max-width: 50px;
  color: #634636;
`

export const IconTime = styled(TimeFive)`
  max-width: 40px;
  color: #634636;
`

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const Label = styled.p`
  font-family: "Montserrat";
  color: #634636;
  font-size: 18px;
  margin: 0;
`

export const Info = styled.p`
  font-family: "Montserrat";
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 20px 60px;
  min-height: 400px;
  height: 100%;
  /* width: 100%; */
`

export const LabelInput = styled.label`
  font-size: 11px;
  font-family: "Montserrat";
  margin-bottom: 10px;
`

export const Input = styled.input`
  height: 50px;
  background-color: #d9d9d9;
  border: none;
  border-radius: 9px;
  padding-left: 20px;
`
export const InputText = styled.textarea`
  min-height: 50px;
  max-width: 360px;
  background-color: #d9d9d9;
  border: none;
  border-radius: 9px;
  padding-left: 20px;
  padding-top: 10px;

  @media screen and (max-width: 500px) {
    max-width: 300px;
    min-height: 100px;
  }
`

export const Button = styled.button`
  width: 100%;
  min-height: 70px;
  background-color: #634636;
  display: inline;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  font-family: "Montserrat";
  letter-spacing: 1.25px;
  text-transform: uppercase;
  border-radius: 9px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormSection = () => {
  const handleSubmit = e => {
    e.preventDefault()
    alert("Obrigado por testar!")
  }

  return (
    <Wrapper id="contact">
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
              <Label>Telefone</Label>
              <Info>
                (21) 93829-2938 <br />
                (21) 93829-2938
              </Info>
            </InfoDiv>
          </WrapperInfo>

          <WrapperInfo>
            <IconDiv>
              <IconLocation />
            </IconDiv>
            <InfoDiv>
              <Label>Endereço</Label>
              <Info>Av. Primeiro de Setembro, 2920 - São Paulo</Info>
            </InfoDiv>
          </WrapperInfo>

          <WrapperInfo>
            <IconDiv>
              <IconTime />
            </IconDiv>
            <InfoDiv>
              <Label>Horário de atendimento</Label>
              <Info>8:00 - 18:00</Info>
            </InfoDiv>
          </WrapperInfo>
        </WrapperContato>

        <WrapperForm>
          <Form onSubmit={handleSubmit}>
            <Box>
              <LabelInput>Insira seu nome:</LabelInput>
              <Input placeholder="nome" />
            </Box>

            <Box>
              <LabelInput>Seu telefone ou e-mail</LabelInput>
              <Input placeholder="telefone/e-mail" />
            </Box>

            <Box>
              <LabelInput>Conte-nos sobre seu caso</LabelInput>
              <InputText placeholder="mensagem" />
            </Box>

            <Button type="submit">Enviar mensagem</Button>
          </Form>
        </WrapperForm>
      </WrapperContent>
    </Wrapper>
  )
}
