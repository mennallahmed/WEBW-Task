import styled from "styled-components"
import { icons } from "../data";

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const Wrapper = styled.div`
flex: 50%;

`
const Circle = styled.div`
   border-radius: 50%;
   width: 80px;
   height: 80px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${props => props.color};
  
`
const Icon = styled.img`
`
const Title = styled.h1`
   font-size: 14px;
   font-weight: 400;
   font-family: 'Poppins', sans-serif;
   color:#3B3A3A;
   margin: 10px 0;
`
const Line = styled.hr`
   background-color: #FF6057;
   width: 80px;
   height: 5px;
   border: none;
   border-radius: 10px;
`
const Text = styled.div`
   font-size: 13px;
   font-weight: 400;
   font-family: 'Poppins', sans-serif;
   color: #8F8F8F;
   padding-bottom: 20px;
`
const Card = () => {
 
  return (
   <Container>
     {icons.map(item =>(
     <Wrapper key={item.id}>    
       <Circle color={item.color}>
        <Icon src={item.img} />
       </Circle>
       <Title>{item.text}</Title>
       <Line></Line>
       <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</Text>   
     </Wrapper>
     ))}
   </Container>
  );
};

export default Card;