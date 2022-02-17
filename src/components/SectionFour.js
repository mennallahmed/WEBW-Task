import styled from "styled-components"
import img from "../media/report.png"
import Headlines from "./Headlines";

const Container = styled.div`
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
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
   padding-top: 150px;
   margin-left: 30px;
`
const Right = styled.div`
  flex: 1; 
  display: flex;
  justify-content: center;
  align-items: center;
`
const ImageContainer = styled.div`
`
const Image = styled.img`
   width: 856px;
   height: 541px;
`

const SectionFour = () => {
  
  return (
   <Container>
     <Wrapper>
       <Left>
         <Headlines display={"none"} header ={"Best Platform for the Technological Era"} ></Headlines>     
       </Left>
       <Right>
         <ImageContainer>
             <Image src ={img} />
         </ImageContainer>
       </Right>
     </Wrapper>
   </Container>
  );
};

export default SectionFour;