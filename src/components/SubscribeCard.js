import React from "react"
import styled from "styled-components"
import { mobile } from "../responsive"


const Container = styled.div`
   padding-top: 15px;
   display: flex; 
   flex-direction: column;
  
`
const Description = styled.div`
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color:white;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center"})};

`
const InputContainer = styled.div`
  width: 90%;
  height: 50px;
  border-radius: 25px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid #707070;
  ${mobile({ width: "80%"})};

`
const Input = styled.input`
  border: none;
  border-radius: 25px;
  flex: 8;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #565656;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }
`
const Button = styled.button`
  flex: 3;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  border: none;
  background-color: #FF6057;
  border-radius: 25px;
  border-color:white;
  color: white;
`

const SubscribeCard = () =>{
  return(
    <Container>
      <Description>Sign up for Special Offers!</Description>
      <InputContainer>
         <Input placeholder="Mail"/>
         <Button>
           Subscribe
         </Button>
      </InputContainer>

    </Container>
  )

}

export default SubscribeCard