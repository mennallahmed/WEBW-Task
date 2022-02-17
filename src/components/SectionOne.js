import styled from "styled-components"
import Card from "./Card";
import Headlines from "./Headlines";

const Container = styled.div`
   width: 90%;
   height: 120vh;
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
   flex-direction: column;
`
const Right = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 30px;
`

const SectionOne = () => {
  
  return (
   <Container>
       <Wrapper>
         <Left>
           <Headlines header ={"The best business solution for you"}></Headlines>
         </Left>
         <Right>
           <Card></Card>
         </Right>
       </Wrapper>
   </Container>
  );
};

export default SectionOne;