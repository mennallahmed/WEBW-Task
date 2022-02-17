import styled from "styled-components"
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";



const Container = styled.div``


const Sections = () => {
 
  return (
   <Container>
     <SectionOne></SectionOne>
     <SectionTwo></SectionTwo>
     <SectionThree></SectionThree>
     <SectionFour></SectionFour>
     <SectionFive display = "none"></SectionFive>
   </Container>
  );
};

export default Sections;
