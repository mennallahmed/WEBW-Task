import styled from "styled-components"
import SubscribeCard from "../components/SubscribeCard"
import { mobile } from "../responsive"

const Container = styled.div`
  padding-top: 10px;
  display: flex;
  background-color:#333333;
  color: white;
  ${mobile({ flexDirection: "column"})};

`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1`
   font-size: 48px;
   font-family: 'Nueva Std', sans-serif;
   font-weight: 700;
`
const Desc = styled.p`
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  margin: 20px 0px;
`
const Center = styled.div`
  flex: 1.5;
  padding: 20px;
  ${mobile({ display: "none"})};

`
const Title = styled.h3`
  padding-top: 15px;
  font-size:16px;
  font-family: 'Poppins', sans-serif;
  font-weight:700;
  margin-bottom: 30px;
`
const List = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
`
const ListItem = styled.li`
   font-size:14px;
   font-family: 'Poppins', sans-serif;
   font-weight:400;
   width: 50%;
   margin-bottom: 10px;
`
const Right = styled.div`
  flex: 2.5;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8"})};

`
const ContactItem = styled.div`
`

const Footer = () =>{
  return(
    <Container>
      <Left>
        <Logo>Study</Logo>
        <Desc> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget diam at mi sollicitudin
        </Desc>
      </Left>
      <Center>
        <Title>Nos services</Title>
        <List>
          <ListItem>Avis clients</ListItem>
          <ListItem>Mentions légales</ListItem>
          <ListItem>Plan du site</ListItem>
          <ListItem>Blog d’Idéematic</ListItem>
          <ListItem>Le dictionnaire du digital</ListItem>
          <ListItem>‹ Notre boutique /›</ListItem>
        </List>
      </Center>
      <Right>
        <ContactItem> <SubscribeCard/> </ContactItem>
      </Right>

    </Container>
  )

}

export default Footer