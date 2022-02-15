import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styled from "styled-components"
import img from "../media/background.png"
import Content from "../components/Content"
import Icons from "../components/Icons"
import Sections from "../components/Sections"

const Container = styled.div``
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
      <Footer/>
    </Container>
  )
}

export default Home