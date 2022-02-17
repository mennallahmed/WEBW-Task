import styled from "styled-components"


const Container = styled.div``
const Title = styled.div`
   font-size: 28px;
   font-weight: 600;
   font-family: 'Poppins', sans-serif;
   color: #8F8F8F;
   text-align: center;
`
const Header = styled.div`
   font-size: 60px;
   font-weight: 700;
   font-family: 'Poppins', sans-serif;
   color: #3B3A3A;
   text-align: center;
`
const Text = styled.div`
   width: 690px;
   height: 126px;
   font-size: 14px;
   font-weight: 400;
   font-family: 'Poppins', sans-serif;
   color: #8F8F8F;
   text-align: center;
`

const SliderHeader = () => {
 
  return (
   <Container>
     <Title>Advanced Customer Service Platform</Title>
     <Header>Platform Overview</Header>
     <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
       <br></br>
 Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
     </Text>
    
   </Container>
  );
};

export default SliderHeader;