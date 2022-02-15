import React from "react";
import styled from "styled-components"
import { images } from "../data";



const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const IconsContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`
const Icon = styled.img`
   flex:1;
   text-align: center;
   width:211px;
   height: 68px;
`
const Icons = () => {
  return(
    <Container>
      <IconsContainer>
        {images.map(item =>(
        <Icon src={item.img} key={item.id}/>
      ))}
      </IconsContainer>
    </Container>
  )

}

export default Icons
