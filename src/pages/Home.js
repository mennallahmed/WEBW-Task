import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styled from "styled-components"
import img from "../media/background.png"
import Content from "../components/Content"
import Icons from "../components/Icons"
import Sections from "../components/Sections"
import Info from "../components/Info"
import { laptop, mobile, tablet } from "../responsive"

const Container = styled.div`
   ${mobile({width: "1300px"})};
   ${tablet({width: "1330px"})};
   ${laptop({width: "1400px"})};

`
const ContainerItems = styled.div`
   background-image: url(${img});
   background-size: cover; 
   
`

const Home = () => {
  return(
    <Container>
      <ContainerItems>    
        <Navbar/>
        <Content/>
        <Icons/>
      </ContainerItems>
      <Sections></Sections>
      <Info></Info>
      <Footer/>
    </Container>
  )
}

export default Home
