import styled from "styled-components"
import img from "../media/report.png"

const Container = styled.div`
`
const Image = styled.img`
   width: 1168px;
   height: 738px;
`
const SpanConatiner = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   `
const Span = styled.div`
   width:12px;
   height: 12px;  
   background-color: ${props => props.color};
   border-radius: 50%;
   margin: 10px;
   cursor: pointer;
`

const Slider = () => {

  
  return (
   <Container>
     <Image src = {img}/>
     <SpanConatiner>
       <Span color = {"#FF6057"} ></Span>
       <Span color = {"#8F8F8F"} ></Span>
       <Span color = {"#8F8F8F"} ></Span>
     </SpanConatiner>
   </Container>
  );
};

export default Slider;