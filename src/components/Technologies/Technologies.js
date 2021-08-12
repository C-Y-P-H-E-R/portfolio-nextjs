import React from 'react';
import { DiFirebase, DiGit, DiJavascript, DiMongodb, DiNodejs, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br /><br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>This is a few Technologies i've learnt in a past few years.</SectionText>
    <br /><br /><br /><br />
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>I'm experienced with React</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
          <ListParagraph>I'm experienced with Javascript</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Firebase</ListTitle>
          <ListParagraph>I'm experienced with Firebase</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="3rem" />
        <ListContainer>
          <ListTitle>Node</ListTitle>
          <ListParagraph>I'm experienced with Node</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMongodb size="3rem" />
        <ListContainer>
          <ListTitle>Mongo</ListTitle>
          <ListParagraph>I'm experienced with MongoDB</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size="3rem" />
        <ListContainer>
          <ListTitle>Github</ListTitle>
          <ListParagraph>I'm experienced with Github</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <br /><br /><br /><br />
  </Section>
);

export default Technologies;
