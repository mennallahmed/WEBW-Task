import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive"


const Container = styled.div`
   height: 60px;
   
`
const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   align-items: center;
   justify-content: space-between;

`
const Left = styled.div`
   flex: 1; 
   display: flex;
   align-items: center;
   justify-content: center;
`
const Logo = styled.h1`
  width: 180px;
  height: 73px;
  font-size: 52px;
  color: white;
  ${mobile({ marginLeft: "20px"})};

`
const Span = styled.span`
   font-family: 'Poppins', sans-serif;
   font-weight: bold;
   font-size: 52px;
`
const Center = styled.div`
   flex: 2; 
   text-align: center;
`
const MenuItem = styled.div`
   width: 415px;
   height: 20px;
   font-size: 14px;
   cursor: pointer;
`
const Link = styled.a`
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   color: white;
   padding:10px;
   ${mobile({ fontWeight:"600"})}; 
`
const Right = styled.div`
   flex: 2; 
   display: flex;
   align-items: center;
   justify-content: center;
  
`
const Button = styled.button`
   height: 45px;
   width: 178px;
   background-image: linear-gradient(to right,rgba(255,96,87,100%),rgba(124,28,128,66%));
   font-size: 16px;
   font-weight: 600;
   font-family: 'Poppins', sans-serif;
   color: white;
   border:none;
   border-radius: 10px;
   cursor: pointer;
`

const Navbar = () =>{
  return(
    <Container>
      <Wrapper> 
         <Left> 
           <Logo>ST<Span>v</Span>DY</Logo>
         </Left>
         <Center>
           <MenuItem>
            <Link>Browser</Link>
            <Link>Bootcamps</Link>
            <Link>How it Works</Link>
            <Link>Testermonial</Link>
           </MenuItem>
         </Center>
         <Right>
            <Button>About us</Button>
         </Right>
      </Wrapper>  
    </Container>
  )

}

export default Navbar
