import styled from "styled-components"

const Container = styled.div`
  
`
const Header = styled.h1`
   width:475px;
   font-size: 38px;
   font-weight: 700;
   font-family: 'Poppins', sans-serif;
   color: #3B3A3A;
   margin: 10px 0;
`
const Text = styled.div`
   width:475px;
   font-size: 14px;
   font-weight: 400;
   font-family: 'Poppins', sans-serif;
   color: #8F8F8F;
   padding-bottom: 20px;
`
const Button = styled.button`
  margin-right: 50px;
  height: 45px;
  width: 178px;
  background-image: linear-gradient(to right,rgba(255,96,87,100%),rgba(124,28,128,66%));
  font-size: 16px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  color: white;
  border:none;
  border-radius: 10px;
  cursor: pointer;
`


const AboutusCard = (props) => {
  return (
   <Container>
     <Header>{props.header}</Header>
     <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
 Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
    </Text>
    <Button>About us</Button>
   </Container>
  );
};

export default AboutusCard;