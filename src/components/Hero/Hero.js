import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section nopadding row style={{width: "70vh" ,height: "100vh", marginTop: "5rem"}}>
    <LeftSection style={{width: "70vh"}}>
      <SectionTitle main center style={{fontSize: "7rem", marginRight: "2rem"}}>
        Hello! <img width="60" src="https://media-exp1.licdn.com/dms/image/C5603AQFjYGa5uOXZbw/profile-displayphoto-shrink_400_400/0/1612439610719?e=1632355200&amp;v=beta&amp;t=UONGhlakUHEzKT0DZLog2aV0lg7REOwk4UDSbjizmYc" height="60" alt="Kushagra Sharma" style={{"borderRadius"  : "100px" , "border" : "3px solid #e9e9e9"}} />
        <br /> I'm Kushagra!!!
      </SectionTitle>
      <SectionText style={{fontSize: "1.8rem"}}>
        Looking for Full-Stack Web Development Jobs and taking care of your Venture.
        Please feel free to contact me on any of my social Media, Via mail or phone.
      </SectionText>
      <Button style={{}} onClick={() => window.location = "https://medium.com/@quasarkid123"}>My Blog</Button>
    </LeftSection>
  </Section>
);

export default Hero;