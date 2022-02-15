import styled from "styled-components"
import {mobile} from "../responsive"
import img from "../media/report.png"
import Card from "./Card";
import Headlines from "./Headlines";

const Container = styled.div``
const Item = styled.div`
   width: 90%;
   height: 94vh;
   display: flex;
   align-items: center;
   justify-content: center;
   ${mobile({ height: "50%"})};
`
const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   ${mobile({ padding: "10px 0"})};
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
  ${mobile({ flex:2, justifyContent: "center"})};
`
const ImageContainer = styled.div`
position:relative;
height:60px;
width:100%;
`
const Image = styled.img`
display:block;
width:800px;
height: 610px;
position:absolute;
top: -300px;
left: -160px;
`

const SectionItem = () => {
  
  return (
   <Container>
     <Item>
       <Wrapper>
         <Left>
           <Headlines header ={"The best business solution for you"}></Headlines>
         </Left>
         <Right>
           <Card></Card>
         </Right>
       </Wrapper>
     </Item>
     <Item>
       <Left>
         <ImageContainer>
           <Image src ={img} />
         </ImageContainer>
       </Left>
       <Right>
         <Headlines header ={"Best Platform for the Technological Era"}></Headlines>
       </Right>
     </Item>
   </Container>
  );
};

export default SectionItem;