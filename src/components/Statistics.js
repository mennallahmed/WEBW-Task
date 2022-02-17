import styled from "styled-components"


const Container = styled.div`
margin: 0 70px ;

`
const Count = styled.div`
  
   height: 64px;
   font-size: 46px;
   font-weight: 700;
   font-family: 'Poppins', sans-serif;
   color: #FF6057;
`
const Text = styled.div`
   height: 28px;
   font-size: 20px;
   font-weight: 600;
   font-family: 'Poppins', sans-serif;
   color: #3B3A3A;
`


const Statistics = (props) => {
 
  return (
   <Container>
    <Count>570</Count>
    <Text>{props.text}</Text>
   </Container>
  );
};

export default Statistics;