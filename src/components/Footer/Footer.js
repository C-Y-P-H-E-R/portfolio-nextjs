import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
    <br /><br /><br /><br />
      <LinkList style={{display: "flex", justifyContent: "space-evenly"}}>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+91 7876211465">Call Me</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:quasarkid123@gmail.com">
            quasarkid123@gmail.com
          </LinkItem>
        </LinkColumn>
        <SocialIconsContainer style={{display: "flex", justifyContent: 'flex-end'}}>
        <SocialContainer>
          <SocialIcons href="https://github.com/C-Y-P-H-E-R">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/kushagrasharmaofficial/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/Hogg_word">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
