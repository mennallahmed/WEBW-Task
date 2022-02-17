import styled from "styled-components"
import AboutusCard from "./AboutusCard";
import InfoCard from "./InfoCard";
import Statistics from "./Statistics";


const Container = styled.div`
   height: 140vh;
`
const Wrapper = styled.div`
   margin-top: 70px;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 10px 20px;
`
const Title = styled.h1`
   width: 304px;
   height: 151px;
   margin-left: 37%;
   margin-bottom: 80px;
   font-size: 38px;
   font-weight: 700;
   font-family: 'Poppins', sans-serif;
   color: #3B3A3A;
   text-align: center;
`
const StatisticsContainer = styled.div`   
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
`
const Left = styled.div`
   flex: 1; 
   flex-wrap: wrap;
   display: flex;
   justify-content: center;
   align-items: center;
`
const SpanConatiner = styled.div`
   flex:1;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 10px;
   `
const Span = styled.div`
   width: 12px;
   height: 12px;  
   background-color: ${props => props.color};
   border-radius: 50%;
   margin: 10px;
   cursor: pointer;
`
const Right = styled.div`
   flex: 1; 
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 30px;
`

const Info = () => {
 
  return (
   <Container>
       <Title>Don't Just Take our Word for it!</Title>
       <StatisticsContainer>
         <Statistics text = "Dowload" ></Statistics>
         <Statistics text = "Active User" ></Statistics>
         <Statistics text = "Positive Feedback" ></Statistics>
         <Statistics text = "+ rating" ></Statistics>
       </StatisticsContainer>
     <Wrapper>
      <Left>
         <InfoCard></InfoCard>
         <SpanConatiner>
           <Span color = {"#FF6057"} ></Span>
           <Span color = {"#8F8F8F"} ></Span>
           <Span color = {"#8F8F8F"} ></Span>
         </SpanConatiner>
      </Left>
      <Right>
         <AboutusCard header="Grow Your Business and Join Our Happy Users"></AboutusCard>
      </Right>
     </Wrapper>
   </Container>
  );
};

export default Info;