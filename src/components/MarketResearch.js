import React from "react"
import styled from "styled-components"


const Container = styled.div`
`
const Wrapper = styled.div`
display: flex;
align-items: center;

`
const Circle = styled.div`
   width: 53px;
   height: 53px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #FF6057;
   border-radius: 50%;
   color: white;
   font-size: 24px;
   font-weight: 700;
   font-family: 'Poppins', sans-serif;
`
const Title = styled.div`
   font-size: 24px;
   font-weight: 600;
   font-family: 'Poppins', sans-serif;
   color: #3B3A3A;
   margin-left: 30px;
`
const Text = styled.div`
   font-size: 14px;
   font-weight: 400;
   font-family: 'Poppins', sans-serif;
   color: #8F8F8F;
   margin-left: 32px;
`
const VerticalLine = styled.div`
   height: 79px;
   border: 3px solid #BCBCBC;
   margin: 25px;
   border-radius: 99px;
`

const MarketResearch = (props) => {
  return(
    <Container>
      <Wrapper>
        <Circle>1</Circle>
        <Title>Market Research</Title>
      </Wrapper>
      <Wrapper>
        <VerticalLine style={{borderColor: props.color}}></VerticalLine>
        <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Text>
      </Wrapper>
    </Container>
  )
}

export default MarketResearch