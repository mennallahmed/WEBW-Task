import React from "react";
import styled from "styled-components";
import img from "../media/report.png"
import img1 from "../media/hidden-img1.png"
import img2 from "../media/hidden-img2.png"

const Container = styled.div`
   width: 100%;
   height: 100vh;
`
const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   align-items: center;
   justify-content: center;
`
const Left = styled.div`
   color: white;
   flex: 2; 
   display: flex;
   justify-content: center;
   flex-direction: column;
`
const TextItems = styled.div`
  
`
const Text = styled.div`

font-size: ${props => props.size};
font-weight: 400;
font-family: 'Poppins', sans-serif;
`
const Header = styled.p`
font-size: 55px;
font-weight: 700;
font-family: 'Poppins', sans-serif;

`
const Button = styled.button`
   height: 45px;
   width: 178px;
   background-color:white;
   color: rgba(255,96,87,100%);
   font-size: 16px;
   font-weight: 600;
   font-family: 'Poppins', sans-serif;
   border:none;
   border-radius: 10px;
   margin: 15px 0;
   cursor: pointer;
`
const Right = styled.div`
  flex: 2; 
  display: flex;
  align-items: center;
  justify-content: center;
`
const ImageContainer = styled.div`
 
`
const ImageOne = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 851px;
  height: 537px;
  z-index: 3;
`
const ImageTwo = styled.img`
  position: absolute;
  top: 140px;
  left: 700px;
  width: 376px;
  height: 397px;
  z-index: 1;
` 
const ImageThere = styled.img`
  position: absolute;
  top: 75px;
  left: 550px;
  width: 376px;
  height: 482px;
  z-index: 2;
`  
const Content = () =>{

  return(
    <Container>
     <Wrapper> 
      <Left>
        <TextItems>
          <Text size="24px">Advanced Platform</Text>
         
            <Header>Take your team to the next level
            </Header>
            <Text size= "18px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod </Text>

        </TextItems>
        <Button>About us</Button>
      </Left>
      <Right>
        <ImageContainer>
          <ImageOne src = {img}/>
          <ImageTwo src = {img1}/>
          <ImageThere src = {img2}/>
        </ImageContainer>
      </Right>
     </Wrapper> 
    </Container>
  )
}

export default Content 
