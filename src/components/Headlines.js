import { ArrowRightAltRounded} from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
   
`
const Line = styled.hr`
   background-color: #FF6057;
   width: 80px;
   height: 5px;
   border: none;
   border-radius: 10px;
`
const Header = styled.h1`
   font-size: 38px;
   font-weight: 700;
   font-family: 'Poppins', sans-serif;
   color: #3B3A3A;
   margin: 10px 0;
`
const Text = styled.div`
   font-size: 13px;
   font-weight: 400;
   font-family: 'Poppins', sans-serif;
   color: #8F8F8F;
   padding-bottom: 20px;
`
const Link = styled.a`
  font-size: 16px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  color: #FF6057;
  margin-right: 50px;
 
`


const Headlines = (props) => {
  return (
   <Container>
     <Line></Line>
     <Header>{props.header}</Header>
     <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
 Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
    </Text>
    <Link>Learn About Our Success</Link>
    <ArrowRightAltRounded style={{color: "#FF6057" , paddingTop:"18px"}}></ArrowRightAltRounded>
   </Container>
  );
};

export default Headlines;