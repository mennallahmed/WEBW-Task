import styled from "styled-components"
import Slider from "./Slider";
import SliderHeader from "./SliderHeader";


const Container = styled.div`
   height: 160vh;
`
const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
`

const SectionThree = () => {
 
  return (
   <Container>
     <Wrapper>
         <SliderHeader></SliderHeader>
         <Slider></Slider>
     </Wrapper>
   </Container>
  );
};

export default SectionThree;