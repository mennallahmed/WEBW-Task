import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive"



const Container = styled.div`
   height: 60px;
   ${mobile({ height: "50%"})};
   
`
const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   ${mobile({ padding: "10px 0"})};

`
const Left = styled.div`
   flex: 1; 
   display: flex;
   align-items: center;
   justify-content: center;
`
const Logo = styled.h1`
  font-size: 52px;
  color: white;
  ${mobile({ marginLeft: "10px", fontSize: "19px"})};

`
const Span = styled.span`
   font-family: 'Poppins', sans-serif;
   font-weight: bold;
`
const Center = styled.div`
   flex: 2; 
   text-align: center;
`
const MenuItem = styled.div`
   font-size: 14px;
   cursor: pointer;

   ${mobile({ fontSize: "12px", marginLeft: "10px"})};
`
const Link = styled.a`
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   color: white;
   padding:10px;
`
const Right = styled.div`
   flex: 2; 
   display: flex;
   align-items: center;
   justify-content: center;
   ${mobile({ flex:2, justifyContent: "center"})};
`
const Button = styled.button`
   height:6vh;
   width: 13vw;
   background-image: linear-gradient(to right,rgba(255,96,87,100%),rgba(124,28,128,66%));
   font-size: 16px;
   font-weight: 600;
   font-family: 'Poppins', sans-serif;
   color: white;
   border:none;
   border-radius: 0.30em;
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