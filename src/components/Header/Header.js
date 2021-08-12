import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <container style={{padding: "3.5rem"}}>
    <Div1 style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
      <Link href="/">
        <a style={{color: "white", display: "flex", alignItems: "center"}}>
          <DiCssdeck size="3rem"/><span>Portfolio</span>
        </a>
      </Link>
      <Div2>
      <li style={{padding: "1.3rem"}}>
        <Link href="#projects">
          <NavLink style={{fontSize: "1.6rem"}}>Projects</NavLink>
        </Link>
      </li>
      <li style={{padding: "1.3rem"}}>
        <Link href="#tech">
          <NavLink style={{fontSize: "1.6rem"}}>Technologies</NavLink>
        </Link>
      </li>
      <li style={{padding: "1.3rem"}}>
        <Link href="#about">
          <NavLink style={{fontSize: "1.6rem"}}>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/C-Y-P-H-E-R" style={{padding: "2rem"}}>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/kushagrasharmaofficial" style={{padding: "2rem"}}>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/Hogg_word" style={{padding: "2rem"}}>
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
    </Div1>
    {/* style={{display: "flex", width: "500px", justifyContent: "space-evenly", marginLeft: "14rem"}} */}
    {/* style={{ display: "flex", flexDirection: "row",alignItems: "center", color: "white"}} */}
    
  </container>
);

export default Header;
