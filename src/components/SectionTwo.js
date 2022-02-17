import styled from "styled-components"
import img from "../media/report.png"
import Headlines from "./Headlines";

const Container = styled.div`
   width: 90%;
   height: 94vh;   
`
const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   align-items: center;
   justify-content: center;
`
const Left = styled.div`
   flex: 1; 
   display: flex;
   justify-content: center;
   align-items: center;
`
const Right = styled.div`
  flex: 1; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-top: 100px;
`
const ImageContainer = styled.div`
   position:relative;
   height:60px;
   width:100%;
`
const Image = styled.img`
   display:block;
   width: 800px;
   height: 610px;
   position: absolute;
   top: -300px;
   left: -170px;
`

const SectionTwo = () => {
  
  return (
   <Container>
     <Wrapper>
       <Left>
         <ImageContainer>
           <Image src ={img} />
         </ImageContainer>
       </Left>
       <Right>
         <Headlines header ={"Best Platform for the Technological Era"}></Headlines>
       </Right>
     </Wrapper>
   </Container>
  );
};

export default SectionTwo;