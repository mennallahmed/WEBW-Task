import styled from "styled-components"
import AboutusCard from "./AboutusCard";
import MarketResearch from "./MarketResearch";

const Container = styled.div`
   width: 90%;
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

const SectionFive = () => {
  
  return (
   <Container>
       <Wrapper>
         <Left>
           <AboutusCard header="Acceleration Process to Grow Your Business"></AboutusCard>
         </Left>
         <Right>
           <MarketResearch></MarketResearch>
           <MarketResearch></MarketResearch>
           <MarketResearch color={"white"}></MarketResearch>
         </Right>
       </Wrapper>
   </Container>
  );
};

export default SectionFive;