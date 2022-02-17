import { StarRateRounded } from "@material-ui/icons"
import styled from "styled-components"
import img from "../media/card-img.png"


const Container = styled.div`

`
const Card = styled.div`
width: 574px;
height: 360px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
`
const Image = styled.img`
   width: 157px;
   height: 203px;
`
const InfoContainer = styled.div`
width: 308px;
 padding: 15px;
`
const Name = styled.h1`
   font-size: 24px;
   font-weight: 600;
   font-family: 'Poppins', sans-serif;
   color: #3B3A3A;
   margin: 10px 0;
`
const Title = styled.div`
   font-size: 16px;
   font-weight: 600;
   font-family: 'Poppins', sans-serif;
   color: #8F8F8F;
   margin: 10px 0;

`
const Text = styled.div`
  
   font-size: 17px;
   font-weight: 400;
   font-family: 'Poppins', sans-serif;
   color: #8F8F8F;
`

const InfoCard = () => {
 
  return (
   <Container>
    <Card>
      <Image src= {img}/>
      <InfoContainer>
         <Name>Florrie Jacobs</Name>
         <Title>CEO of Company</Title>
         <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</Text>
         <StarRateRounded style= {{color: "#CB48F9"}}></StarRateRounded>
         <StarRateRounded style= {{color: "#CB48F9"}}></StarRateRounded>
         <StarRateRounded style= {{color: "#CB48F9"}}></StarRateRounded>
         <StarRateRounded style= {{color: "#CB48F9"}}></StarRateRounded>
         <StarRateRounded style= {{color: "#CB48F9"}}></StarRateRounded>
      </InfoContainer>
    </Card>
   </Container>
  );
};

export default InfoCard;